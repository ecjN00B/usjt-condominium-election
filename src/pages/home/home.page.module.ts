import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home.page';
import { SocialCardComponent } from '../../components/social-card/social-card.component';

@NgModule({
  declarations: [
    HomePage,
    SocialCardComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
