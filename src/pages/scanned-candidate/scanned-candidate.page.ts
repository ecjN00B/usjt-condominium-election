import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-scanned-candidate',
  templateUrl: 'scanned-candidate.page.html',
})
export class ScannedCandidatePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform
  ) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
      });
    }

  candidate: Object;

  ionViewDidLoad(){
    this.candidate = this.navParams.data;
  }

  onVote(): void {
    console.log('voto computado');
  }

}
