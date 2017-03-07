import 'meteor-client';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MeteorObservable} from 'meteor-rxjs';
import {Meteor} from 'meteor/meteor';
import {AppModule} from './app.module';

Meteor.startup(() => {
  const subscription = MeteorObservable.autorun().subscribe(() => {

    Meteor.absoluteUrl["defaultOptions"].rootUrl = "http://localhost:8100";

    if (Meteor.loggingIn()) {
      return;
    }

    setTimeout(() => subscription.unsubscribe());
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
});
