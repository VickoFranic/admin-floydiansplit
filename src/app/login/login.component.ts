import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Initiate Facebook login modal and redirect to admin area on success
   */
  loginWithFacebook() {

    const options = {
      scope: 'public_profile, manage_pages'
    }

    this.authService.fb.login(options)
      .then((response) => {
        return this.authService.getUserAccounts();
      })
      .then((accounts) => {
        if (this.authService.canAccessAdmin(accounts)) {
          return this.router.navigate(['admin']);
        }
      })
      .catch((e) => console.error(e));
  }

}
