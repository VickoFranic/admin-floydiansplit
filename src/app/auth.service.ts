import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Injectable()
export class AuthService {
  fb: FacebookService;

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

  getUser() {
    if (this.fb.getAuthResponse()) {
      return this.fb.api('/me?fields=name,picture');
    }
    return null;
  }

}
