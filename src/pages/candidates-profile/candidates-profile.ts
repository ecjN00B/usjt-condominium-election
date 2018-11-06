import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['CandidatesPage']
})

@Component({
  selector: 'page-candidates-profile',
  templateUrl: 'candidates-profile.html',
})
export class CandidatesProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatesProfilePage');
  }

}
