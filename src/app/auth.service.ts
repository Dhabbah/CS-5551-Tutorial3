import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LoggedInStatus = false;
  constructor(private Http: HttpClientModule) { }

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
  login(a, v) {
   // localStorage.getItem('UserName', (document.getElementById('Username') as HTMLInputElement).value);
   // console.log(this.Username, this.Password);
  }
}
