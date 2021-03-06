import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../providers/auth/auth.service';
import { User } from '../models/user.model';
import { UserService } from '../providers/user/user.service';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  currentUser: User;

  constructor(
    appCtrl: App,
    authService: AuthService,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userService: UserService
  ) {

    authService
      .afAuth
      .authState
      .subscribe((authUser: firebase.User) => {

        if (authUser) {
          userService.currentUser
          .snapshotChanges()
          .pipe(
            map(action => ({ $key: action.key, ...action.payload.val() }))
            ).subscribe((user: User) => {
              this.currentUser = user;
              appCtrl.getRootNav().setRoot('TabsPage', { currentUser: this.currentUser });
            });
        } else {
          appCtrl.getRootNav().setRoot('LoginPage');
        }

      });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  viewProfile(): void {
    this.nav.push('UserProfilePage', this.currentUser);
  }

}
