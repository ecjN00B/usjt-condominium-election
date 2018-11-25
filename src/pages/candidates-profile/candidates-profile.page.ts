import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';

@IonicPage({
  defaultHistory: ['CandidatesPage'],
  segment:'profile'
})

@Component({
  selector: 'page-candidates-profile',
  templateUrl: 'candidates-profile.page.html',
})
export class CandidatesProfilePage {

  name: String;
  description: String;
  number: String;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad(){
    this.name = this.navParams.data.name;
    this.description = this.navParams.data.description;
    this.number = this.navParams.data.number;
  }

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform
  ) {
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
  }

}
