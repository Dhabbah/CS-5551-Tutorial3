import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LoggedInStatus = false;
  constructor() { }

  FirstName = localStorage.getItem('FirstName');
  LastName = localStorage.getItem('LastName');
  Username =  localStorage.getItem('UserName');
  Password = localStorage.getItem('Password');
  private value: boolean;

  LoggedIn(value: boolean) {
    this.value = value;
    this.LoggedInStatus = this.value;
  }

  get isLoggedIn() {
    return this.LoggedInStatus;
  }
}
