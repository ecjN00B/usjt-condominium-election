import { AlertController, App } from 'ionic-angular';
import { Injectable } from '@angular/core';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest/rest.service';
import { UserService } from '../user/user.service';

@Injectable()

export class QrcodeService extends RestService{

  constructor(
    public alertCtrl: AlertController,
    private appCtrl: App,
    public barcodeScanner: BarcodeScanner,
    public http: HttpClient,
    public userService: UserService
  ) {
    super(http);
  }

  scanAndFindUser(isCandidate: boolean = true): void {
    this.barcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        if(barcodeResult.cancelled == false) {
          if(barcodeResult.format != "QR_CODE")
            this.showAlert(`Error`, `Invalid Format`);
          else if(isCandidate) {
            this.getCandidate(barcodeResult.text)
              .then((candidate: Object) => {
                if (candidate) {
                  this.appCtrl.getRootNav().push('ScannedCandidatePage', candidate);
                } else {
                  this.showAlert(`Error`, `Invalid Candidate`);
                }
              }).catch((err) => {
                this.showAlert(`Error`, `Invalid Candidate`);
              });
          } else {            
            this.userService.findUser(barcodeResult.text)
              .then((user: Object) => {
                if (user) {
                  this.appCtrl.getRootNav().push('ScannedUserPage', user);
                } else {
                  this.showAlert(`Error`, `Invalid Elector`);
                }
              }).catch((err) => {
                this.showAlert(`Error`, `Invalid Elector`);
              });            
          }

        }
      }).catch((err) => {      
        console.log(err);
      });
  }

  private showAlert(title: string, message: string): void {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}
