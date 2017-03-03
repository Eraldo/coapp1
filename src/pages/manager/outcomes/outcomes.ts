import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Outcomes} from 'api/collections';
import {Outcome, OutcomeScope, OUTCOME_SCOPES} from "api/models";

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutcomesPage');
  }

}
