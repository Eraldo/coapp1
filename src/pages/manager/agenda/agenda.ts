import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OutcomeScope, OUTCOME_SCOPES} from "api/models";
import moment = require("moment");

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
  scope: OutcomeScope;
  scopes: OutcomeScope[];
  date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scope = OutcomeScope.DAY;
    this.scopes = OUTCOME_SCOPES;
    this.date = moment().toDate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
