import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';

@IonicPage()

@Component({
  selector: 'page-about',
  templateUrl: 'about.page.html'
})
export class AboutPage {

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  constructor(public authService: AuthService, public navCtrl: NavController) {}

}