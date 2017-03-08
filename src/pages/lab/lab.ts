import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";

/*
  Generated class for the Lab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lab',
  templateUrl: 'lab.html'
})
export class LabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.push(ProfilePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabPage');
  }

}
