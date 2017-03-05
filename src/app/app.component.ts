import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {ManagerPage} from '../pages/manager/manager';
import {LabPage} from "../pages/lab/lab";
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
import {LoginPage} from "../pages/login/login";


@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  activePage: any;

  apps: Array<{name: string, component: any, icon?: string, color?: string}>;
  pages: Array<{name: string, component: any, icon?: string, color?: string}>;
  feedbackPage: {name: string, component: any, icon?: string, color?: string};

  constructor(public platform: Platform) {
    this.initializeApp();

    this.apps = [
      { name: 'Home', component: HomePage, icon: 'home', color: 'area-1'},
      { name: 'Manager', component: ManagerPage, icon: 'briefcase', color: 'area-3' },
      { name: 'Journal', component: JournalPage, icon: 'book', color: 'area-5' },
      { name: 'Community', component: CommunityPage, icon: 'people', color: 'area-4' },
      { name: 'Journey', component: JourneyPage, icon: 'plane', color: 'area-2' },
      { name: 'Academy', component: AcademyPage, icon: 'school', color: 'area-6' },
      { name: 'Vision', component: VisionPage, icon: 'eye', color: 'area-7' },
    ];
    this.pages = [
      { name: 'Support', component: SupportPage, icon: 'help-circle', color: 'mid' },
      { name: 'Settings', component: SettingsPage, icon: 'settings', color: 'mid' },
      { name: 'About', component: AboutPage, icon: 'information-circle', color: 'mid' },
      { name: 'Contact', component: ContactPage, icon: 'mail', color: 'mid' },
      { name: 'Lab', component: LabPage, icon: 'flask', color: 'light' },
    ];
    this.feedbackPage = { name: 'Feedback', component: FeedbackPage, icon: 'paper-plane', color: 'mid' };
    this.activePage = this.apps[0]
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
    this.activePage = page;
  }

  pushPage(page) {
    this.nav.push(page.component);
  }

  checkActive(page) {
    return page == this.activePage;
  }
}
