import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Outcomes} from 'api/collections';
import {Outcome, OutcomeScope, OUTCOME_SCOPES} from "api/models";
import {OutcomePage} from "../outcome/outcome";

@Component({
  selector: 'page-outcomes',
  templateUrl: 'outcomes.html'
})
export class OutcomesPage {

  outcomes;
  scope: OutcomeScope;
  scopes: OutcomeScope[];

  ngOnInit() {
    this.outcomes = Outcomes.find({}).zone();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scope = OutcomeScope.DAY;
    this.scopes = OUTCOME_SCOPES;
  }

  delete(outcome: Outcome): void {
    Outcomes.remove({_id: outcome._id}).subscribe(() => {
    });
  }

  showOutcome(outcome: Outcome): void {
    this.navCtrl.push(OutcomePage, {outcome});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutcomesPage');
  }

}
