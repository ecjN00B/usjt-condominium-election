import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  sigla: String;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad(){
    this.name = this.navParams.data.name;
    this.description = this.navParams.data.description;
    this.sigla = this.navParams.data.sigla;
  }

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

}
