import { Injectable } from '@angular/core';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { AlertController, App } from 'ionic-angular';
import { UserService } from '../user/user.service';

@Injectable()

export class QrcodeService {

  constructor(
    public alertCtrl: AlertController,
    private appCtrl: App,
    public barcodeScanner: BarcodeScanner,
    public userService: UserService
  ) {}

  scanAndFindUser(): void {
    this.barcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        if(barcodeResult.cancelled == false) {
          if(barcodeResult.format != "QR_CODE")
            this.showAlert(`Error`, `Invalid Format`);
          else {            
            console.log(barcodeResult.text);
            this.userService.findUser(barcodeResult.text)
              .then((user) => {
                this.appCtrl.getRootNav().push('ScannedUserPage', user);
              }).catch((err) => {
                console.log('erro: ', err);
                this.showAlert(`Error`, `Invalid user`);
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
