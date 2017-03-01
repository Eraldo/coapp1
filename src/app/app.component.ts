import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {ManagerPage} from '../pages/manager/manager';
import {SandboxPage} from "../pages/sandbox/sandbox";
import {FeedbackPage} from "../pages/feedback/feedback";
import {HomePage} from "../pages/home/home";
import {JournalPage} from "../pages/journal/journal";
import {CommunityPage} from "../pages/community/community";
import {JourneyPage} from "../pages/journey/journey";
import {AcademyPage} from "../pages/academy/academy";
import {VisionPage} from "../pages/vision/vision";
import {SupportPage} from "../pages/support/support";
import {AboutPage} from "../pages/about/about";
import {SettingsPage} from "../pages/settings/settings";
import {ContactPage} from "../pages/contact/contact";


@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild(Nav) nav: Nav;

  rootPage = ManagerPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Manager', component: ManagerPage },
      { title: 'Journal', component: JournalPage },
      { title: 'Community', component: CommunityPage },
      { title: 'Journey', component: JourneyPage },
      { title: 'Academy', component: AcademyPage },
      { title: 'Vision', component: VisionPage },
      { title: 'Support', component: SupportPage },
      { title: 'About', component: AboutPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Feedback', component: FeedbackPage },
      { title: 'Sandbox', component: SandboxPage }
    ];

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
