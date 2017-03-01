import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Observable} from "rxjs";
import * as moment from 'moment';
import {Outcome} from "../../models";

@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html'
})
export class ManagerPage {
  outcomes: Observable<Outcome[]>;

  constructor(public navCtrl: NavController) {
    this.outcomes = this.findOutcomes();
  }

  private findOutcomes(): Observable<Outcome[]> {
    return Observable.of([
      {
        _id: '0',
        title: 'clean garage',
        createdAt: moment().subtract(1, 'hours').toDate(),
      },
      {
        _id: '1',
        title: 'mobile app',
        createdAt: moment().subtract(2, 'hours').toDate(),
      },
      {
        _id: '2',
        title: 'desktop app',
        createdAt: moment().subtract(2, 'hours').toDate(),
      },
    ]);
  }
}
