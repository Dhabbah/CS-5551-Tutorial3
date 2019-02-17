import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName: any;
  Password: any;
  constructor(private  Auth: AuthService,  private router: Router) { }

  ngOnInit() {
   // localStorage.setItem('FirstName', (document.getElementById('username') as HTMLInputElement).value);
//  const username = localStorage.getItem('username');
  // const password = localStorage.getItem('password')
  // console.log(this.Auth.login());
 // document.getElementById('Username') as HTMLInputElement).value);
  }

  LogIn(e) {
   e.preventDefault();
   const logintarget = e.target;
   this.UserName = logintarget.querySelector('#username').value;
   this.Password = logintarget.querySelector('#password').value;
   this.Auth.login(this.Auth.Username, this.Auth.Password);
   if (this.Auth.Username === this.UserName && this.Auth.Password === this.Password) {
     this.Auth.LoggedIn(true);
     this.router.navigate(['/nutritionsearch']);
    } else {alert('Please Enter a valid account.'); }
  }
}
