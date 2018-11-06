import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'list'
})

@Component({
  selector: 'page-candidates',
  templateUrl: 'candidates.html'
})
export class CandidatesPage {

  constructor(public navCtrl: NavController) {
    
  }

  viewProfile(){
    this.navCtrl.push('CandidatesProfilePage');
  }

}
