import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { RestService } from '../../providers/rest/rest.service';

@IonicPage()

@Component({
  selector: 'page-scanned-candidate',
  templateUrl: 'scanned-candidate.page.html',
})
export class ScannedCandidatePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    private restService: RestService
  ) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
      });
    }

  candidate: any;

  ionViewDidLoad(){
    this.candidate = this.navParams.data;
  }

  onCancel(): void {
    this.navCtrl.pop();
  }

  onVote(): void {
    
    let vote = {
      candidateId: this.candidate._id
    };

    this.restService.addVote(vote)
      .then((voteStatus) => {
        console.log(voteStatus);
        this.navCtrl.pop();
      }).catch((err) => {
        console.log('Error: ', err);
      })
  }

}
