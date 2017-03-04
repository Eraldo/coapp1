import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import moment = require("moment");

/*
  Generated class for the Journal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html'
})
export class JournalPage {
  date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.date = moment().toDate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JournalPage');
  }

}
