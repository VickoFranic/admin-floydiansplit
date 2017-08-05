import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { Config } from './config';

@Injectable()
export class AuthService {
  fb: FacebookService;

  constructor(fb: FacebookService) {
    this.fb = fb;

    let initParams: InitParams = {
      appId: Config.appId,
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
    if (Config.admins.indexOf(userId) > -1) {
      return true;
    }
    return false;
  }

}
