import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private SignedInStatus = false;
  constructor(private Http: HttpClientModule) { }

  FirstName = localStorage.getItem('FirstName');
  LastName = localStorage.getItem('LastName');
  Username =  localStorage.getItem('UserName');
  Password = localStorage.getItem('Password');
  ConfirmPassword = localStorage.getItem('ConfirmPassword');
  value: boolean;

  LoggedIn(value) {
    this.value = value;
    this.SignedInStatus = this.value;
  }

  get isSignedIn() {
    return this.SignedInStatus;
  }
  login(a, v) {
    // localStorage.getItem('UserName', (document.getElementById('Username') as HTMLInputElement).value);
    // console.log(this.Username, this.Password);
  }
}
