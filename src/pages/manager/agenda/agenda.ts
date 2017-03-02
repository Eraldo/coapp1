import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OutcomeScope} from "../../../models";

/*
  Generated class for the Agenda page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
  scope: OutcomeScope;
  scopes: OutcomeScope[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scope = OutcomeScope.DAILY;
    this.scopes = [OutcomeScope.DAILY, OutcomeScope.WEEKLY, OutcomeScope.MONTHLY]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
