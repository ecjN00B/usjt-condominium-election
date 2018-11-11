import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  ionViewDidLoad(){
    this.name = this.navParams.data.name;
    this.description = this.navParams.data.description;
    this.sigla = this.navParams.data.sigla;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
