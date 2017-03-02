import {Component} from '@angular/core';
import {NavController, NavParams, reorderArray, PopoverController} from 'ionic-angular';
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
  ordering: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.outcomes = this.findOutcomes();
    this.scope = OutcomeScope.INBOX;
    this.scopes = OUTCOME_SCOPES;
    this.ordering = false;
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

  reorder(indexes): void {
    console.log(indexes.from + ' ' + indexes.to);
    this.outcomes = this.outcomes.map<Outcome[]>(outcomesArray => {
      return reorderArray(outcomesArray, indexes)
    });
  }

  toggleReorder(): void {
    this.ordering = !this.ordering;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutcomesPage');
  }

}
