import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Injectable()
export class AuthService {

  fb: FacebookService;
  admins: Array<string> = [
    '10211172940735895'
  ]

  constructor(fb: FacebookService) {
    this.fb = fb;

    let initParams: InitParams = {
      appId: '1648357935458763',
      xfbml: true,
      cookie: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }

  /**
   * Get Facebook user
   */
  getUser() {
    if (this.fb.getAuthResponse()) {
      return this.fb.api('/me?fields=name,picture');
    }
    return null;
  }

  /**
   * Check if user is one of Floydian admins
   * @param userId FB user ID
   */
  canAccessAdmin(userId) {
    if (this.admins.indexOf(userId) > -1) {
      return true;
    }
    return false;
  }

}
