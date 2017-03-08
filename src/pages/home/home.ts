import { Component } from '@angular/core';

import {NavController, PopoverController} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {HomeOptionsComponent} from "./home-options";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {

  }

  profile() {
    this.navCtrl.push(ProfilePage)
  }

  showOptions(event): void {
    const popover = this.popoverCtrl.create(HomeOptionsComponent);

    popover.present({
      ev: event
    });
  }
}
