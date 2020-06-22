import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private SignedInStatus = false;
  constructor() { }

 /* FirstName = localStorage.getItem('FirstName');
  LastName = localStorage.getItem('LastName');
  Username =  localStorage.getItem('UserName');
  Password = localStorage.getItem('Password');
  ConfirmPassword = localStorage.getItem('ConfirmPassword');*/
  value: boolean;

  LoggedIn(value) {
    this.value = value;
    this.SignedInStatus = this.value;
  }

  get isSignedIn() {
    return this.SignedInStatus;
  }
}
