import {Component} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {Outcomes} from 'api/collections';
import {Outcome, OutcomeScope, OUTCOME_SCOPES} from "api/models";
import {OutcomePage} from "../outcome/outcome";
import {OutcomeFormPage} from "../outcome/outcome-form";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
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

  showFilters() {
    this.menuCtrl.open('filter-menu');
  }

  newOutcome() {
    this.navCtrl.push(OutcomeFormPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutcomesPage');
  }

}
