import {Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Outcome} from "api/models";
import {Outcomes} from "api/collections";
import {OutcomePage} from "./outcome";

@Component({
  selector: 'outcome-item',
  templateUrl: 'outcome-item.html'
})
export class OutcomeItem {
  @Input()
  outcome: Outcome;
  steps;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showDetails(): void {
    let outcome = this.outcome;
    this.navCtrl.push(OutcomePage, {outcome});
  }

  delete(): void {
    Outcomes.remove({_id: this.outcome._id}).subscribe(() => {
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutcomePage');
  }

}
