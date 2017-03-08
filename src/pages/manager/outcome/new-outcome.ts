import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Outcome, OutcomeStatus, OutcomeScope, OUTCOME_SCOPES, OUTCOME_STATUSES} from "api/models";
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'page-new-outcome',
  templateUrl: 'new-outcome.html'
})
export class NewOutcomePage implements OnInit {
  private outcomeForm: FormGroup;
  scopes: OutcomeScope[];
  statuses: OutcomeStatus[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.scopes = OUTCOME_SCOPES;
    this.statuses = OUTCOME_STATUSES;
  }

  ngOnInit() {
    this.outcomeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      status: [OutcomeStatus.OPEN, Validators.required],
      inbox: [true, Validators.required],
      scope: [OutcomeScope.DAY, Validators.required],
      deadline: [''],
      start: [''],
      content: [''],
      steps: this.formBuilder.array([
        // this.initStep(),
      ]),
    });
  }

  initStep() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  addStep() {
    const control = <FormArray>this.outcomeForm.controls['steps'];
    control.push(this.initStep());
  }

  removeStep(i: number) {
    const control = <FormArray>this.outcomeForm.controls['steps'];
    control.removeAt(i);
  }

  save(outcome: Outcome) {
    console.log(outcome);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewOutcomePage');
  }

}
