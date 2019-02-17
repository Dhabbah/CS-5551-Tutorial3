import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // password:any;
  // username:any;
  constructor(private  Auth: AuthService) { }

  ngOnInit() {
   // localStorage.setItem('FirstName', (document.getElementById('username') as HTMLInputElement).value);
//  const username = localStorage.getItem('username');
  // const password = localStorage.getItem('password')
  // console.log(this.Auth.login());
 // document.getElementById('Username') as HTMLInputElement).value);
  }

  LogIn(e) {
    e.preventDefault();
    // @ts-ignore
    console.log(this.Auth.login(this.Auth.Username, this.Auth.Password));
    if (this.Auth.Username === 'khaliddhabbah@gmail.com' && this.Auth.Password === '1234') {
     // this.router.navigate(['home']);

    }
  }
}
