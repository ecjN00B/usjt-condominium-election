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

  searchQuery: string = '';
  candidates: string[];

  constructor(public navCtrl: NavController) {
    this.initializeCandidates();
  }

  initializeCandidates() {
    this.candidates = [
      'N00B',
      'Candidato 1',
      'Candidato 2',
      'Candidato 3',
      'Candidato 4'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeCandidates();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.candidates = this.candidates.filter((candidate) => {
        return (candidate.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  viewProfile(){
    this.navCtrl.push('CandidatesProfilePage');
  }

}
