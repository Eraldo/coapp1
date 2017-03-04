import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OutcomeScope, OUTCOME_SCOPES} from "api/models";

/*
  Generated class for the Vision page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vision',
  templateUrl: 'vision.html'
})
export class VisionPage {
  scope: OutcomeScope;
  scopes: OutcomeScope[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scope = OutcomeScope.DAY;
    this.scopes = OUTCOME_SCOPES;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisionPage');
  }

}
