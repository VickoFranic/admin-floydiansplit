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
          return this.authService.getUserAccounts()
            .then((accounts) => {
              if (this.authService.canAccessAdmin(accounts)) {
                return true;
              }
            });
        }
        this.router.navigate(['login']);
        return false;
      });
  }
}
