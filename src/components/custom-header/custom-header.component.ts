import { Component, Input } from '@angular/core';
import { AlertController, MenuController, NavController } from 'ionic-angular';

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
    public authService: AuthService,
    public menuCtrl: MenuController,
    public navCtrl: NavController
  ) {
    super(alertCtrl, authService, menuCtrl, navCtrl)
  }

}
