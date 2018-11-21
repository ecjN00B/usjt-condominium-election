import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'tutorial',
  templateUrl: 'tutorial.page.html'
})

export class TutorialPage {

  constructor(public navCtrl: NavController) {}

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Condominium Election App</b> displays several useful functions that include voting on your candidate.",
      image: "./assets/imgs/tutorial.png"
    },
    {
      title: "Edit Profile",
      description: "On the <b>Profile Page</b> you can add a photo and edit your name / username",
      image: "./assets/imgs/edit-profile.png"
    },
    {
      title: "See Candidates",
      description: "On the <b>Candidates Tab</b> you can find your favorite candidate and your information",
      image: "./assets/imgs/search-candidate.png"
    },
    {
      title: "See Current Votes",
      description: "On the <b>Graphs Tab</b> you can monitor the current voting",
      image: "./assets/imgs/current-votes.jpg"
    }
  ];

  dismiss(): void {
    this.navCtrl.setRoot('TabsPage');
  }

}
