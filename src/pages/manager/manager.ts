import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AgendaPage} from "./agenda/agenda";
import {ActionPage} from "./action/action";
import {OutcomesPage} from "./outcomes/outcomes";
import {InboxPage} from "./inbox/inbox";

@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html'
})
export class ManagerPage {
  agendaPage: any = AgendaPage;
  actionPage: any = ActionPage;
  inboxPage: any = InboxPage;
  outcomesPage: any = OutcomesPage;

  constructor(public navCtrl: NavController) {
  }
}
