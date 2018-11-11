import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'list'
})

@Component({
  selector: 'page-candidates',
  templateUrl: 'candidates.page.html'
})

export class CandidatesPage {

  searchQuery: string = '';
  candidates: Array<any>;

  constructor(public navCtrl: NavController) {
    this.initializeCandidates();
  }

  initializeCandidates() {
    this.candidates = [
      {
        'name':'N00B',
        'sigla':'#000',
        'description': 'Taxation is theft'
      },
      {
        'name':'Candidato 1',
        'sigla':'#001',
        'description': 'Taxation is theft'
      },
      {
        'name':'Candidato 2',
        'sigla':'#002',
        'description': 'Taxation is theft'
      },
      {
        'name':'Candidato 3',
        'sigla':'#003',
        'description': 'Taxation is theft'
      }
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
        return (candidate.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (candidate.sigla.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  viewProfile(i){
    this.navCtrl.push('CandidatesProfilePage', this.candidates[i]);
  }

}
