import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ManagerPage } from '../pages/manager/manager';
import { SandboxPage } from '../pages/sandbox/sandbox';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    App,
    AboutPage,
    ContactPage,
    HomePage,
    ManagerPage,
    SandboxPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
