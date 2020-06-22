import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
Date;
  constructor(private firebaseA: AngularFireAuth,
              private FirebaseDB: AngularFireDatabase,  private tts: TextToSpeech) {
    this.Date = Date();
  }


  ngOnInit() {
    this.tts.speak('Welcome to lab 5').then();
    this.firebaseA.authState.subscribe(auth => {
      this.FirebaseDB.object(`Date/${auth.uid}`).set({
        Date: this.Date,
      }) .then();
  });
}
}
