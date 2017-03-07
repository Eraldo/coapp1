import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LabPage } from '../pages/lab/lab';
import {FeedbackPage} from "../pages/feedback/feedback";
import { TabsPage } from '../pages/tabs/tabs';
import {JourneyPage} from "../pages/journey/journey";
import {JournalPage} from "../pages/journal/journal";
import {CommunityPage} from "../pages/community/community";
import {AcademyPage} from "../pages/academy/academy";
import {VisionPage} from "../pages/vision/vision";
import {SupportPage} from "../pages/support/support";
import {SettingsPage} from "../pages/settings/settings";
import {MANAGER_DECLARATIONS} from "../pages/manager";
import {MomentModule} from "angular2-moment";
import {AccountService} from "../services/account";
import {LoginPage} from "../pages/login/login";
import {VerificationPage} from "../pages/verification/verification";

@NgModule({
  declarations: [
    App,
    LoginPage,
    VerificationPage,
    HomePage,
    // ManagerPage,
    ...MANAGER_DECLARATIONS,
    JournalPage,
    CommunityPage,
    JourneyPage,
    AcademyPage,
    VisionPage,
    SupportPage,
    AboutPage,
    SettingsPage,
    ContactPage,
    FeedbackPage,
    LabPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(App),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    LoginPage,
    VerificationPage,
    HomePage,
    ...MANAGER_DECLARATIONS,
    // ManagerPage,
    JournalPage,
    CommunityPage,
    JourneyPage,
    AcademyPage,
    VisionPage,
    SupportPage,
    AboutPage,
    SettingsPage,
    ContactPage,
    FeedbackPage,
    LabPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountService,
    ]
})
export class AppModule {}
