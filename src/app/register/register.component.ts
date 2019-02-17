import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted: any;
  FirstName: any;
  LastName: any;
  UserName: any;
  Password: any;
  constructor( private  Auth: AuthService, private router: Router) { }

  ngOnInit() {

  }
  store() {
    if (localStorage) {
      localStorage.setItem('FirstName', (document.getElementById('FirstName') as HTMLInputElement).value);
      localStorage.setItem('LastName', (document.getElementById('LastName') as HTMLInputElement).value);
      localStorage.setItem('UserName', (document.getElementById('Username') as HTMLInputElement).value);
      localStorage.setItem('Password', (document.getElementById('Password') as HTMLInputElement).value);
      this.router.navigate(['/login']);
    } else {alert('Your browser does not support local storage.'); }
  }

  clear() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
