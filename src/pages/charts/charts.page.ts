import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { RestService } from '../../providers/rest/rest.service';

@IonicPage()

@Component({
  selector: 'page-charts',
  templateUrl: 'charts.page.html'
})
export class ChartsPage {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  chartOptions: any;
  labels: string[] = [];
  data: number[] = [];

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public restService: RestService
  ) {
    console.log(this.labels);
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Current Votes',
        style: {
          color: "dark"
        }
      },
      xAxis: {
        categories: this.labels
      },
      yAxis: {
        title: {
          text: 'Number of Votes'
        }
      },
      series: [{
        name: 'Votes',
        data: this.data
      }]
    }
  }

  async ionViewCanEnter(): Promise<boolean> {
    await this.getCandidates();
    return this.authService.authenticated;
  }

  getCandidates(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.restService.getAllCandidates()
        .then(async (candidates: any[]) => {
          for (let i in candidates) {
            if (candidates.hasOwnProperty(i)){
              this.labels.push(candidates[i].name);
              await this.getVotes(candidates[i]._id)
                .then((data) => {
                  this.data.push(data);
                });
            }
          }
          resolve();
        });
    });
  }

  async getVotes(uuid: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let count = 0;
      this.restService.getVotes()
        .then((votes: any) => {
          votes.filter((vote) => {
            count +=  vote.candidate == uuid ? 1 : 0;
          });
          resolve(count);
        });
      });
  }

  ionViewDidLoad() {}

}