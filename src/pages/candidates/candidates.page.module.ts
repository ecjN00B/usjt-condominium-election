import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatesPage } from './candidates.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CandidatesPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CandidatesPage),
  ]
})
export class CandidatesPageModule {}
