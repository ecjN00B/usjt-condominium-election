import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatesProfilePage } from './candidates-profile';

@NgModule({
  declarations: [
    CandidatesProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CandidatesProfilePage),
  ],
})
export class CandidatesProfilePageModule {}
