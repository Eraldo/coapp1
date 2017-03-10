import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Outcome, OutcomeStatus, OutcomeScope, OUTCOME_SCOPES, OUTCOME_STATUSES} from "api/models";
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import {MeteorObservable} from "meteor-rxjs";

@Component({
  selector: 'outcome-form',
  templateUrl: 'outcome-form.html'
})
export class OutcomeForm implements OnInit {
  @Input()
  private outcome: Outcome = {status: OutcomeStatus.OPEN, inbox: true, scope: OutcomeScope.DAY};
  private form: FormGroup;
  scopes: OutcomeScope[];
  statuses: OutcomeStatus[];
  @Output()
  statusChanges = new EventEmitter();

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.scopes = OUTCOME_SCOPES;
    this.statuses = OUTCOME_STATUSES;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
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
    // init form validity
    this.statusChanges.emit(this.form.valid);
    this.form.statusChanges.distinctUntilChanged().subscribe(data => {
      console.log('Form changes', data);
      this.statusChanges.emit(this.form.valid)
    })
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
    if (this.form.valid) {
      MeteorObservable.call('addOutcome', this.outcome).subscribe({
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
