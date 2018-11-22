import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../providers/auth/auth.service';
import { Environment } from '../models/environment.model';
import { UserService } from '../providers/user/user.service';

const environment = new Environment();

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: environment.getApiKey(),
  authDomain: environment.getAuthDomain(),
  databaseURL: environment.getDatabaseUrl(),
  projectId: environment.getProjectid(),
  storageBucket: environment.getStorageBucket(),
  messagingSenderId: environment.getMessagingSenderId()
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseAppConfig),
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService
  ]
})
export class AppModule {}
