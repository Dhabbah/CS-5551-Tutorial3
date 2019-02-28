import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private  Auth: AuthService, private router: Router) { }
  FirstName;
  LastName;
  UserName;
  Password;
  ngOnInit() {

  }
  store() {
    if (localStorage) {
      localStorage.setItem('FirstName', this.FirstName);
      localStorage.setItem('LastName', this.LastName);
      localStorage.setItem('UserName', this.UserName);
      localStorage.setItem('Password', this.Password);
      if ((this.FirstName != null) && (this.LastName != null) && (this.UserName != null) && (this.Password != null)) {
        alert('Registration Successful'); this.router.navigate(['/login']);  location.reload();
      } else {alert('Please complete the form'); }
    } else {alert('Your browser does not support local storage.'); }
  }
}
