import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireStorage } from 'angularfire2/storage';
import { first } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

@IonicPage()

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.page.html',
})
export class UserProfilePage {

  private inputNameDisabled: boolean = true;
  private inputUsernameDisabled: boolean = true;

  private editIconName: string = "lock";
  private editIconUsername: string = "lock";

  private currentUser: User;
  private filePhoto: File;

  constructor(
    private afStorage: AngularFireStorage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {
  }

  ionViewDidLoad(): void {
    this.currentUser = this.navParams.data;
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.filePhoto) {
      this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key)
        .then((UploadTaskSnapshot: firebase.storage.UploadTaskSnapshot) => {
          this.afStorage.ref(`/users/${this.currentUser.$key}`)
            .getDownloadURL()
            .pipe(
              first()
            )
            .subscribe((downloadURL) => {
              this.editUser(downloadURL);
            });          
        });
    } else {
      this.editUser();
    }
  }

  onPhoto(event): void {
    this.filePhoto = event.target.files[0];
  }

  private editUser(photoUrl?: string): void {
    this.userService
      .edit({
        name: this.currentUser.name,
        username: this.currentUser.username,
        photo: photoUrl || this.currentUser.photo || ''
      }).then(() => {
        this.filePhoto = undefined;
      });
  }

  changeIcon(): void {
    this.editIconName = this.inputNameDisabled ? "lock" : "unlock";
    this.editIconUsername = this.inputUsernameDisabled ? "lock" : "unlock";
  }

}
