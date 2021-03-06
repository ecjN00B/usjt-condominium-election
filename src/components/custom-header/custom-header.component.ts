import { Component, Input } from '@angular/core';
import { AlertController, App, MenuController, NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.component.html'
})

export class CustomHeaderComponent extends BaseComponent {

  @Input() title: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public authService: AuthService,
    public menuCtrl: MenuController,
    public navCtrl: NavController
  ) {
    super(alertCtrl, authService, menuCtrl, navCtrl)
  }

  onHelp(): void {
    this.app.getRootNav().setRoot('TutorialPage');
  }

}
