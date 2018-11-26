import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { RestService } from '../../providers/rest/rest.service';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

import { map } from 'rxjs/operators';

@IonicPage()

@Component({
  selector: 'page-scanned-candidate',
  templateUrl: 'scanned-candidate.page.html',
})
export class ScannedCandidatePage {

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    private restService: RestService,
    public userService: UserService
  ) {
      this.platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
      });
    }

  candidate: any;
  currentUser: User;

  ionViewDidLoad(){
    this.candidate = this.navParams.data;
    this.getCurrentUser();
  }

  async getCurrentUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.currentUser
        .snapshotChanges()
        .pipe(
          map(action => ({ $key: action.key, ...action.payload.val() }))
        ).subscribe((user: User) => {
          this.currentUser = user;
        });
    });
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
        this.userService.edit({
          name: this.currentUser.name,
          username: this.currentUser.username,
          photo: this.currentUser.photo || '',
          voted: true
        });
        this.showAlert("Success", "Your vote has been registered.");
        this.navCtrl.pop();
      }).catch((err) => {
        console.log('Error: ', err);
      })
  }

  private showAlert(title: string, message: string): void {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
 
}
