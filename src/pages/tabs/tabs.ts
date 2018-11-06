import { Component } from '@angular/core';

import { IonicPage } from 'ionic-angular';

@IonicPage({
  priority: 'high'
})

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = 'HomePage';
  about = 'AboutPage';
  candidates = 'CandidatesPage';
  graphics = 'GraphicsPage';

  constructor() {

  }
}
