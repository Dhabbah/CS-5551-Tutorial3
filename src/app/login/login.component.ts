import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



 // password:any;
  constructor(private  Auth: AuthService) { }

  ngOnInit() {
   // localStorage.setItem('FirstName', (document.getElementById('username') as HTMLInputElement).value);
//  const username = localStorage.getItem('username');
  // const password = localStorage.getItem('password')
  console.log(this.Auth.login());
 // document.getElementById('Username') as HTMLInputElement).value);
  }

  LogIn() {
  }
}
