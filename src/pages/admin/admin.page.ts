import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

import { Observable } from 'rxjs';

import { AuthService } from '../../providers/auth/auth.service';
import { QrcodeService } from '../../providers/qrcode/qrcode.service';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

@IonicPage()

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.page.html',
})

export class AdminPage {

  users: Observable<User[]>;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.users = this.userService.users;
  }

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    private platform: Platform,
    public qrcode: QrcodeService,
    public userService: UserService
  ) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
      });
    }

  onGetBarcode(): void {
    this.qrcode.scanAndFindUser();
  }

  onSelectUser(user) {
    console.log(user);
  }

}
