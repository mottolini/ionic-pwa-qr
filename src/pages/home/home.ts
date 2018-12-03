import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentPlaforms: any
  
  constructor(public navCtrl: NavController, private platform: Platform) {
    this.currentPlaforms = platform._platforms;
  }

}
