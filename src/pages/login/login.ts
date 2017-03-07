import {Component, OnInit, NgZone} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {AccountService} from "../../services/account";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {HomePage} from "../home/home";
import {VerificationPage} from "../verification/verification";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private formBuilder: FormBuilder, private zone: NgZone, private accoutService: AccountService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = '';
  }

  onInputKeypress({keyCode}: KeyboardEvent): void {
    if (keyCode === 13) {
      this.login();
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      this.accoutService.login(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => {
          if (Meteor.user() && Meteor.user().emails[0].verified) {
            this.navCtrl.setRoot(HomePage);
          }
          this.navCtrl.setRoot(VerificationPage);
        })
        .catch((e) => {
          this.handleError(e);
        });
    }
  }

  loginGoogle(): void {
    this.accoutService.loginGoogle()
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((e) => {
        this.handleError(e);
      });
  }

  join(): void {
    if (this.loginForm.valid) {
      this.accoutService.register(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => {
          this.navCtrl.setRoot(HomePage);
        })
        .catch((e) => {
          this.handleError(e);
        });
    }
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
    console.log('ionViewDidLoad LoginPage');
  }

}
