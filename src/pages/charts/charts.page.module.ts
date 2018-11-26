import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ChartsPage } from './charts.page';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from '../../providers/rest/rest.service';

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';

@NgModule({
  declarations: [
    ChartsPage
  ],
  imports: [
    ChartModule.forRoot(highcharts),
    ComponentsModule,
    HttpClientModule,
    IonicPageModule.forChild(ChartsPage)
  ],
  providers: [
    RestService
  ]
})
export class ChartsPageModule {}
