import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';

import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';

import { AngularFireStorage } from 'angularfire2/storage';
import { AuthService } from '../../providers/auth/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  
  private photoUri: string;


  constructor(
    public actionSheetCtrl: ActionSheetController,
    private afStorage: AngularFireStorage,
    public authService: AuthService,
    public camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    public toastCtrl: ToastController,
    public userService: UserService
  ) {
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad(): void {
    this.currentUser = this.navParams.data;
  }

  onSubmit(event: Event): void {

    event.preventDefault();

    if (this.photoUri) {
      let uploadTask = this.userService.uploadPhoto(this.photoUri, this.currentUser.$key);

      console.log('passou');
      
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

  onActionSheet(): void {
    this.actionSheetCtrl.create({
      title: 'Select image source',
      buttons: [
        {
          text: 'Load from Library',
          icon: !this.platform.is('ios') ? 'photos' : null,
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null
        }
      ]
    }).present();
  }

  takePicture(sourceType: number): void {
    let cameraOptions: CameraOptions = {
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      quality: 100,
      sourceType: sourceType
    }

    this.camera.getPicture(cameraOptions)
      .then((fileUri: string) => {
        this.photoUri = 'data:image/jpeg;base64,' + fileUri; 
      }).catch((err) => {
        console.log(err);
      })
  }

  private editUser(photoUrl?: string): void {
    this.userService
      .edit({
        name: this.currentUser.name,
        username: this.currentUser.username,
        photo: photoUrl || this.currentUser.photo || ''
      }).then(() => {
        this.photoUri = undefined;
        this.uploadProgress = 0;
        this.showToast('Update successful');
      });
  }

  changeIcon(): void {
    this.editIconName = this.inputNameDisabled ? "lock" : "unlock";
    this.editIconUsername = this.inputUsernameDisabled ? "lock" : "unlock";
  }
  
  showToast(message: string): void {
    this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).present();
  }

}
