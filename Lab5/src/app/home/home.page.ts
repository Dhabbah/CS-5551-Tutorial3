import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

import { Keyboard } from '@ionic-native/keyboard/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Username;
  Password;
  constructor(public keyboard: Keyboard, private  Auth: AuthService,  private router: Router,
              private firebase: AngularFireAuth, private tts: TextToSpeech) {
  }

  ngOnInit() {
    this.tts.speak('Welcome to lab 5').then();
  }

  LogIn(e) {
    try {
      const logintarget = e.target;
      this.Username = logintarget.querySelector('#Username').value;
      this.Password = logintarget.querySelector('#Password').value;
      this.firebase.auth.signInWithEmailAndPassword(this.Username, this.Password).then(() => {
        this.Auth.LoggedIn(true);
        this.router.navigate(['/list']);
      }).catch(() => {
        alert('Please Enter a valid account.');
      });
    } catch (e) {
      console.error(e);
    }
  }
}
