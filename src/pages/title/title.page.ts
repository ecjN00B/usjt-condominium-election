import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, Platform } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { QrcodeService } from '../../providers/qrcode/qrcode.service';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

import { map } from 'rxjs/operators';

@IonicPage()

@Component({
  selector: 'page-title',
  templateUrl: 'title.page.html'
})
export class TitlePage {

  currentUser: User;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  constructor(
    public alertCtrl: AlertController,
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
    if(this.currentUser.voted) {
      this.showAlert("Already voted", "You can't vote anymore.");
    } else {
      this.qrcodeService.scanAndFindUser();
    }
  }

  private showAlert(title: string, message: string): void {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}