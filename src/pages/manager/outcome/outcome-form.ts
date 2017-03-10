import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Outcome, OutcomeStatus, OutcomeScope, OUTCOME_SCOPES, OUTCOME_STATUSES} from "api/models";
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import {MeteorObservable} from "meteor-rxjs";

@Component({
  selector: 'outcome-form',
  templateUrl: 'outcome-form.html'
})
export class OutcomeFormPage implements OnInit {
  private outcome: Outcome = {status: OutcomeStatus.OPEN, inbox: true, scope: OutcomeScope.DAY};
  private form: FormGroup;
  scopes: OutcomeScope[];
  statuses: OutcomeStatus[];
  create: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.outcome = <Outcome>navParams.get('outcome') || this.outcome;
    this.scopes = OUTCOME_SCOPES;
    this.statuses = OUTCOME_STATUSES;
    // Checking for an existing outcome.
    if (!this.outcome._id) {
      this.create = true;
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      _id: [this.outcome._id],
      userId: [this.outcome.userId],
      name: [this.outcome.name, [Validators.required, Validators.minLength(4)]],
      status: [this.outcome.status, Validators.required],
      inbox: [this.outcome.inbox],
      scope: [this.outcome.scope, Validators.required],
      deadline: [this.outcome.deadline],
      start: [this.outcome.start],
      content: [this.outcome.content],
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
    const control = <FormArray>this.form.controls['steps'];
    control.push(this.initStep());
  }

  removeStep(i: number) {
    const control = <FormArray>this.form.controls['steps'];
    control.removeAt(i);
  }

  save() {
    console.log(this.outcome);
    let outcome = this.form.value;
    console.log(outcome);

    if (this.form.valid) {
      let action = 'addOutcome';
      if (this.outcome._id) {
        action = 'updateOutcome';
      }
      MeteorObservable.call(action, outcome).subscribe({
        next: () => {
          this.navCtrl.pop();
        },
        error: (e: Error) => {
          this.handleError(e);
        }
      });
    }
  }

  handleError(e: Error): void {
    console.error(e);

    const alert = this.alertCtrl.create({
      buttons: ['OK'],
      message: e.message,
      title: 'Oops!'
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewOutcomePage');
  }

}
