import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../providers/auth/auth.service';
import { User } from '../models/user.model';
import { UserService } from '../providers/user/user.service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  currentUser: User;

  constructor(
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
          this.rootPage = 'HomePage';
            userService.currentUser
              .valueChanges()
              .subscribe((user: User) => {
                this.currentUser = user;
              });
        } else {
          this.rootPage = 'LoginPage';
        }

      });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  viewProfile() {
    this.nav.push('UserProfilePage', this.currentUser);
  }

}
