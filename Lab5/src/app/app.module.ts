import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';

const FireBase = {
  apiKey: 'AIzaSyDfiRTDueMlfB-fACUm5S3NXqZcut1PPlA',
  authDomain: 'lab5-fabaa.firebaseapp.com',
  databaseURL: 'https://lab5-fabaa.firebaseio.com',
  projectId: 'lab5-fabaa',
  storageBucket: 'lab5-fabaa.appspot.com',
  messagingSenderId: '572203593198'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [ ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FireBase),
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Keyboard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
