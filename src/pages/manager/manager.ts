import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AgendaPage} from "./agenda/agenda";
import {ActionPage} from "./action/action";
import {OutcomesPage} from "./outcomes/outcomes";

@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html'
})
export class ManagerPage {
  agendaPage: any = AgendaPage;
  actionPage: any = ActionPage;
  outcomesPage: any = OutcomesPage;

  constructor(public navCtrl: NavController) {
  }
}
