import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireStorage } from 'angularfire2/storage';
import { AuthService } from '../../providers/auth/auth.service';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

@IonicPage()

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.page.html',
})
export class UserProfilePage {

  inputNameDisabled: boolean = true;
  inputUsernameDisabled: boolean = true;
  editIconName: string = "lock";
  editIconUsername: string = "lock";

  currentUser: User;
  uploadProgress: number;
  
  private filePhoto: File;


  constructor(
    private afStorage: AngularFireStorage,
    public authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
  ) {}

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad(): void {
    this.currentUser = this.navParams.data;
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.filePhoto) {
      let uploadTask = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);
      


      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: any) =>  {
          this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          console.log(error);
      });

      uploadTask.then((UploadTaskSnapshot: firebase.storage.UploadTaskSnapshot) => {
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
        this.uploadProgress = 0;
      });
  }

  changeIcon(): void {
    this.editIconName = this.inputNameDisabled ? "lock" : "unlock";
    this.editIconUsername = this.inputUsernameDisabled ? "lock" : "unlock";
  }

}
