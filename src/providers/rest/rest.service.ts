import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Environment } from '../../models/environment.model';

const environment = new Environment();
const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

@Injectable()
export class RestService {

  private apiURL: string = environment.getWebServiceURL();

  constructor(public http: HttpClient) {}

  getCandidates() {
    return new Promise(resolve => {
      this.http.get(`${this.apiURL}/api/candidates`, { headers: headers, responseType: 'json' }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getVotes() {
    return new Promise(resolve => {
      this.http.get(`${this.apiURL}/api/votes`, { headers: headers, responseType: 'json' }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addVote(vote: {voter: string, voterId: string, candidate: string, voted_date?: Date}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiURL}/api/votes`, JSON.stringify(vote), { headers: headers, responseType: 'json' })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
