import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

// @ts-ignore
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  FirstName;
  LastName;
  UserName;
  Password;
  ConfirmPassword;
  constructor( private  router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }
  register() {
    if (localStorage) {
      localStorage.setItem('FirstName', this.FirstName);
      localStorage.setItem('LastName', this.LastName);
      localStorage.setItem('UserName', this.UserName);
      localStorage.setItem('Password', this.Password);
      localStorage.setItem('ConfirmPassword', this.ConfirmPassword);
      if(this.Password == this.ConfirmPassword){

        if((this.FirstName != null) && (this.LastName != null) && (this.UserName != null) && (this.Password != null)){
          alert('Registration Successful'); this.router.navigate(['/home']);
        }else {alert("Please complete the form")}

      }else {alert("Please confirm the password correctly")}

    } else {alert('Your browser does not support local storage.'); }
  }

}
