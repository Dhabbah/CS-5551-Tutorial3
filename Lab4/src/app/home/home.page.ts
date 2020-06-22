import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Username;
  Password;
  constructor(private  Auth: AuthService,  private router: Router) { }

  ngOnInit() {
  }


  LogIn(e) {
    const logintarget = e.target;
    this.Username = logintarget.querySelector('#Username').value;
    this.Password = logintarget.querySelector('#Password').value;
    if ((this.Auth.Username === this.Username) && (this.Auth.Password === this.Password)) {
      this.Auth.LoggedIn(true);
      this.router.navigate(['/list']);
    } else {alert('Please Enter a valid account.'); }
  }
}
