import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted: any;

  constructor() { }

  ngOnInit() {

  }
  store() {
    if (localStorage) {
      localStorage.setItem('FirstName', (document.getElementById('FirstName') as HTMLInputElement).value);
      localStorage.setItem('LastName', (document.getElementById('LastName') as HTMLInputElement).value);
      localStorage.setItem('UserName', (document.getElementById('Username') as HTMLInputElement).value);
      localStorage.setItem('Password', (document.getElementById('Password') as HTMLInputElement).value);
      // localStorage.clear();
      console.log(localStorage);
      // alert('Login incorrect');
      // @ts-ignore
     // window.location.href('../login');
    } else {alert('Your browser does not support local storage.'); }
  }

  clear() {
    localStorage.clear();
  }

  show() {
    console.log(localStorage);
  }
}
