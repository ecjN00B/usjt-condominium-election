import { Component } from '@angular/core';

import { AuthService } from '../../providers/auth/auth.service';
import { IonicPage, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';

@IonicPage({
  priority: 'high'
})

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.page.html'
})
export class TabsPage {

  currentUser: User;

  etitulo = 'TitlePage';
  admin = 'AdminPage';
  candidates = 'CandidatesPage';
  charts = 'ChartsPage';
  home = 'HomePage';

  constructor(public authService: AuthService, public navParams: NavParams) {}

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad(){
    this.currentUser = this.navParams.data.currentUser;
    console.log(this.currentUser);
  }

}
