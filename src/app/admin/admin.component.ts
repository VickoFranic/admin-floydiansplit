import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: object = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getUser()
      .then((user) => {
        this.user = user;
      })
      .catch((e) => console.log(e));
  }

  logout() {
    this.authService.fb.logout()
      .then((response) => {
        this.router.navigate(['/login']);
      });
  }

}
