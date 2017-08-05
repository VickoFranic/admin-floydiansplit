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

    this.authService.fb.login()
      .then((response) => {
        this.router.navigate(['admin']);
      })
      .catch(e => console.error('Error logging in'));
  }

}
