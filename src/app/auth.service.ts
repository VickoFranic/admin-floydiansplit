import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  user: object = null;
  isLoggedIn: boolean = false;

  constructor() { }

  getUser() {
    return this.user;
  }
}
