import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCG5DzP_g7rjo_O15UDymcfv50YhwAJPkw",
  authDomain: "ionic-condominium-election-app.firebaseapp.com",
  databaseURL: "https://ionic-condominium-election-app.firebaseio.com",
  projectId: "ionic-condominium-election-app",
  storageBucket: "ionic-condominium-election-app.appspot.com",
  messagingSenderId: "287146848223"
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
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
