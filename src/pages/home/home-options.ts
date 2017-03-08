import { Component } from '@angular/core';

import {NavController, AlertController, ViewController, Alert} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {AccountService} from "../../services/account";
import {LoginPage} from "../login/login";

@Component({
  selector: 'home-options',
  templateUrl: 'home-options.html'
})
export class HomeOptionsComponent {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private alertCtrl: AlertController, private accountService: AccountService) {

  }

  profile() {
    this.navCtrl.push(ProfilePage);
    this.viewCtrl.dismiss()
  }

  logout(): void {
    const alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure you would like to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.handleLogout(alert);
            return false;
          }
        }
      ]
    });

    this.viewCtrl.dismiss().then(() => {
      alert.present();
    });
  }

  handleLogout(alert: Alert): void {
    alert.dismiss().then(() => {
      return this.accountService.logout();
    })
      .then(() => {
        this.navCtrl.setRoot(LoginPage, {}, {
          animate: true
        });
      })
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
}
