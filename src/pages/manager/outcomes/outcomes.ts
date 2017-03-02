import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs";
import {Outcome, OutcomeScope, OUTCOME_SCOPES} from "../../../models";
import moment = require("moment");

@Component({
  selector: 'page-outcomes',
  templateUrl: 'outcomes.html'
})
export class OutcomesPage {

  outcomes: Observable<Outcome[]>;
  scope: OutcomeScope;
  scopes: OutcomeScope[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.outcomes = this.findOutcomes();
    this.scope = OutcomeScope.DAY;
    this.scopes = OUTCOME_SCOPES;
  }

  private findOutcomes(): Observable<Outcome[]> {
    return Observable.of([
      {
        _id: '0',
        name: 'clean garage',
        createdAt: moment().subtract(1, 'hours').toDate(),
      },
      {
        _id: '1',
        name: 'mobile app',
        createdAt: moment().subtract(2, 'hours').toDate(),
      },
      {
        _id: '2',
        name: 'desktop app',
        createdAt: moment().subtract(2, 'hours').toDate(),
      },
    ]);

  }

  delete(outcome: Outcome): void {
    this.outcomes = this.outcomes.map<Outcome[]>(outcomesArray => {
      const outcomeIndex = outcomesArray.indexOf(outcome);
      outcomesArray.splice(outcomeIndex, 1);

      return outcomesArray;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutcomesPage');
  }

}
