import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav:Nav;

  pages: [{title:string, component:any, index:number, icon:string}];
  rootPage:any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      {
        title: 'HomePage',
        component: 'HomePage',
        index: 0,
        icon: 'home'
      }
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any, index: number): void{
    let params = {};

    if (index)
      params = { tabIndex: page.index };
 
    if (this.nav.getActiveChildNav() && index != undefined)
      this.nav.getActiveChildNav().select(index);
    else
      this.nav.setRoot(page.pageName, params);
  }

}
