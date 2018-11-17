import { OnInit } from "@angular/core";

import { AlertController, MenuController, NavController } from 'ionic-angular';

import { AuthService } from "../providers/auth/auth.service";

export abstract class BaseComponent implements OnInit {

    constructor(
        public alertCtrl: AlertController,
        public authService: AuthService,
        public menuCtrl: MenuController,
        public navCtrl: NavController
    ) { }

    ngOnInit(): void {}

    onLogout(): void {
        this.alertCtrl.create({
            message: 'Do you want to quit?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.authService.logout()
                            .then(() => {
                                this.navCtrl.setRoot('LoginPage');
                            });
                    }
                },
                {
                    text: 'No'
                }
            ]
        }).present();
    }

}