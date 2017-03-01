import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {ManagerPage} from '../pages/manager/manager';
import {SandboxPage} from "../pages/sandbox/sandbox";
import { TabsPage } from '../pages/tabs/tabs';
import {FeedbackPage} from "../pages/feedback/feedback";


@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Manager', component: ManagerPage },
      { title: 'Sandbox', component: SandboxPage },
      { title: 'Feedback', component: FeedbackPage }
    ];

    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   if (platform.is('cordova')) {
    //     StatusBar.styleDefault();
    //     Splashscreen.hide();
    //   }
    // });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
