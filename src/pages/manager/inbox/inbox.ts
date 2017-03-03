import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {OUTCOME_SCOPES, OutcomeScope, OUTCOME_STATUSES, OutcomeStatus} from "api/models";

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {
  private outcome: FormGroup;
  scopes: OutcomeScope[];
  statuses: OutcomeStatus[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.scopes = OUTCOME_SCOPES;
    this.statuses = OUTCOME_STATUSES;
    this.outcome = this.formBuilder.group({
      name: ['mobile app', [Validators.required, Validators.minLength(3)]],
      status: [OutcomeStatus.OPEN, Validators.required],
      scope: [OutcomeScope.DAY, Validators.required],
      deadline: [''],
      start: [''],
      content: ['I want a modern app for colgend!'],
      steps: [''],
    });
  }

  logForm(){
    console.log(this.outcome.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
