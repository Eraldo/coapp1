import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Outcome} from "api/models";

@Component({
  selector: 'page-outcome-edit',
  templateUrl: 'outcome-edit.html'
})
export class OutcomeEditPage {
  outcome: Outcome;
  isValid: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.outcome = <Outcome>navParams.get('outcome');
  }

  save(outcome: Outcome) {
    console.log(outcome);
  }

  setValidity(isValid: boolean) {
    console.log(isValid);
    this.isValid = isValid;
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
