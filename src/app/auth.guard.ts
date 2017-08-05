import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {

    return this.authService.fb.getLoginStatus()
      .then((response) => {
        if (response.status == 'connected') {
          return true;
        }
        else {
          this.router.navigate(['login']);
          return false;
        }
      });
  }
}
