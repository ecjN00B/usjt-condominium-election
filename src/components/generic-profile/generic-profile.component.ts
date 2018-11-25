import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'generic-profile',
  templateUrl: 'generic-profile.component.html'
})

export class GenericProfileComponent {

  @Input() user: any;
  
  constructor(
    public navCtrl: NavController
  ) {}

  dismiss(): void {
    this.navCtrl.pop();
  }

}
