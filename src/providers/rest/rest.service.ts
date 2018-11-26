import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Environment } from '../../models/environment.model';

const environment = new Environment();
const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable()
export class RestService {

  private apiURL: string = environment.getWebServiceURL();

  constructor(public http: HttpClient) {}

  getAllCandidates(): Promise<Object>{
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/api/candidates`, { headers: headers, responseType: 'json' }).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  getCandidate(candidateId: string): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/api/candidates/${candidateId}`, { headers: headers, responseType: 'json' }).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  getVotes(): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/api/votes`, { headers: headers, responseType: 'json' }).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  addVote(vote: {candidate: string, voted_date?: Date}): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiURL}/api/votes`, JSON.stringify(vote), { headers: headers, responseType: 'text' })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
