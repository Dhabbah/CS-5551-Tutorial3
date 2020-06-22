import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  FirstName;
  LastName;
  constructor(private  router: Router, private Auth: AuthService, private firebaseA: AngularFireAuth,
              private FirebaseDB: AngularFireDatabase) { }

  ngOnInit() {
    this.firebaseA.authState.subscribe(auth => {
      // @ts-ignore
      this.FirebaseDB.object(`Profile/${auth.uid}`).valueChanges(FirstName, LastName).subscribe(
          data => {
            console.log(data);
            this.FirstName = data.FirstName;
            this.LastName = data.LastName;
          });
    });
  }

  update() {
    this.firebaseA.authState.subscribe(auth => {
      // @ts-ignore
      this.FirebaseDB.object(`Profile/${auth.uid}`).update({
        FirstName: this.FirstName,
        LastName: this.LastName
      }) .then();
    });
    alert('Updating Successful'); this.router.navigate(['/list']);
  }
}
