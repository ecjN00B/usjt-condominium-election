import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraphicsPage } from './graphics.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GraphicsPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GraphicsPage),
  ],
})
export class GraphicsPageModule {}
