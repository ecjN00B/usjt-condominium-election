import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TutorialPage } from './tutorial.page';

@NgModule({
  declarations: [
    TutorialPage
  ],
  imports: [
    IonicPageModule.forChild(TutorialPage)
  ]
})
export class TutorialPageModule {}
