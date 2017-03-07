import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {AccountService} from "../../services/account";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

/*
  Generated class for the Verification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage implements OnInit {
  verificationForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private alertCtrl: AlertController, private accountService: AccountService) {}

  ngOnInit() {
    this.verificationForm = this.formBuilder.group({
      token: ['', Validators.required],
    });
  }

  onInputKeypress({keyCode}: KeyboardEvent): void {
    if (keyCode === 13) {
      this.verify();
    }
  }

  verify(): void {
    if (this.verificationForm.valid) {
      this.accountService.verify(this.verificationForm.value.token)
        .catch((e) => {
          this.handleError(e);
        });
    }
  }

  resend(): void {
    this.accountService.sendVerification()
      .catch((e) => {
        this.handleError(e);
      });
  }

  handleError(e: Error): void {
    console.error(e);

    const alert = this.alertCtrl.create({
      title: 'Oops!',
      message: e.message,
      buttons: ['OK']
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationPage');
  }

}
