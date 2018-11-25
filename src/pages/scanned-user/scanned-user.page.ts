import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { User } from '../../models/user.model';

@IonicPage()

@Component({
  selector: 'page-scanned-user',
  templateUrl: 'scanned-user.page.html',
})

export class ScannedUserPage {

  user: User;

  ionViewDidLoad(){
    this.user = this.navParams.data;
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform
  ) {
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
  }

  dismiss(): void {
    this.navCtrl.pop();
  }


}
