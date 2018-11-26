import { Component } from '@angular/core';
import { NavController, IonicPage, Platform } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { QrcodeService } from '../../providers/qrcode/qrcode.service';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

import { map } from 'rxjs/operators';

@IonicPage()

@Component({
  selector: 'page-about',
  templateUrl: 'about.page.html'
})
export class AboutPage {

  currentUser: User;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    private platform: Platform,
    public qrcodeService: QrcodeService,
    public userService: UserService
  ) {
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
    this.getCurrentUser();
  }

  async getCurrentUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.currentUser
        .snapshotChanges()
        .pipe(
          map(action => ({ $key: action.key, ...action.payload.val() }))
        ).subscribe((user: User) => {
          this.currentUser = user;
        });
    });
  }

  onGetBarcode(): void {
    this.qrcodeService.scanAndFindUser();
  }

}