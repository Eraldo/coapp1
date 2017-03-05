import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Outcome} from "api/models";
import {Steps} from "api/collections";

@Component({
  selector: 'page-outcome',
  templateUrl: 'outcome.html'
})
export class OutcomePage {
  outcome: Outcome;
  steps;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.outcome = <Outcome>navParams.get('outcome');
    console.log('Selected outcome is: ', this.outcome);
  }

  ngOnInit() {
    this.steps = Steps.find(
      {outcomeId: this.outcome._id}
    ).zone();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutcomePage');
  }

}
