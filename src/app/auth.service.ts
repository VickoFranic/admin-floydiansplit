import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { Config } from './config';
import { environment } from './../environments/environment';

@Injectable()
export class AuthService {
  fb: FacebookService;

  constructor(fb: FacebookService) {
    this.fb = fb;

    let initParams: InitParams = {
      appId: environment.appId,
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
   * Get user pages on Facebook
   */
  getUserAccounts() {
    if (this.fb.getAuthResponse()) {
      return this.fb.api('/me/accounts?fields=name');
    }
    return null;
  }

  /**
   * Check if user is one of Floydian admins
   * @param accounts | Facebook accounts for user
   */
  canAccessAdmin(accounts) {

    let canAccess = false;
    let pages = accounts.data;
    let ids: Array<string> = [];

    pages.forEach(page => {
      ids.push(page.id);
    });
    
    if (ids.indexOf(Config.pageId) > -1) {
      return true;
    }

    return false;
  }

}
