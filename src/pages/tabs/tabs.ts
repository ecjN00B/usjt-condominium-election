import { Component } from '@angular/core';

import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = 'HomePage';
  about = 'AboutPage';
  contact = 'ContactPage';
  graphics = 'GraphicsPage';

  constructor() {

  }
}
