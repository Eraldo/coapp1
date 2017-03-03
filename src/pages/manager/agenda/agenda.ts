import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OutcomeScope, OUTCOME_SCOPES} from "../../../models";
import moment = require("moment");

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
  scope: OutcomeScope;
  scopes: OutcomeScope[];
  date: Date;
  isoDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scope = OutcomeScope.DAY;
    this.scopes = OUTCOME_SCOPES;
    this.date = moment().toDate();
    this.isoDate = this.date.toISOString()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
