import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { RestService } from '../../providers/rest/rest.service';

@IonicPage({
  segment: 'list'
})

@Component({
  selector: 'page-candidates',
  templateUrl: 'candidates.page.html'
})

export class CandidatesPage {

  searchQuery: string = '';
  candidates: any;

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  constructor(public authService: AuthService, public navCtrl: NavController, public restService: RestService) {
    this.initializeCandidates();
  }

  async initializeCandidates() {
    await this.restService.getAllCandidates()
      .then(data => {
        this.candidates = data;
      });
  }

  async getItems(ev: any) {

    await this.initializeCandidates();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.candidates = this.candidates.filter((candidate) => {
        return (candidate.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (candidate.number.toString().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  viewProfile(i){
    this.navCtrl.push('CandidatesProfilePage', this.candidates[i]);
  }

}
