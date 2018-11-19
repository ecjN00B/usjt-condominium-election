import { Component } from '@angular/core';

import { AuthService } from '../../providers/auth/auth.service';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  priority: 'high'
})

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.page.html'
})
export class TabsPage {

  home = 'HomePage';
  about = 'AboutPage';
  candidates = 'CandidatesPage';
  graphics = 'GraphicsPage';

  constructor(public authService: AuthService) {}

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

}
