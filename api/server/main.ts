import { Meteor } from 'meteor/meteor';
import {Outcomes} from "./collections/outcomes";
import {Steps} from "./collections/steps";
import * as moment from 'moment';
import {OutcomeStatus, OutcomeScope} from "../models";
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  // process.env.ROOT_URL = 'http://mydomain.com:3000';
  loadfixtures();
  if (Meteor.settings) {
    configUrl();
    configGoogle()
  }
});

function configUrl() {
  var theURL = Meteor.settings['url'];
  Meteor.absoluteUrl["defaultOptions"].rootUrl = theURL;
  // process.env.ROOT_URL = theURL;
  // process.env.MOBILE_ROOT_URL = theURL;
  // process.env.MOBILE_DDP_URL = theURL;
  // process.env.PORT = Meteor.settings.port;
  // process.env.DDP_DEFAULT_CONNECTION_URL = theURL;
  // console.log(process.env);
}

function configGoogle() {
  // Load and set Google app configurations
  var googleConfig = Meteor.settings['google'];
  ServiceConfiguration.configurations.upsert({
    service: "google"
  }, {
    $set: {
      clientId: googleConfig.clientId,
      secret: googleConfig.secret
    }
  });
}

function loadfixtures() {
  if (Outcomes.find({}).cursor.count() === 0) {
    let outcomeId;

    outcomeId = Outcomes.collection.insert({
      name: 'clean garage',
      status: OutcomeStatus.OPEN,
      scope: OutcomeScope.DAY,
      deadline: moment().add(4, 'days').toDate(),
      start: moment().add(2, 'days').toDate(),
      content: 'I want to have a very clean garage!',
      createdAt: moment().subtract(4, 'hours').toDate()
    });

    Steps.collection.insert({
      outcomeId: outcomeId,
      name: 'cleaning left corner',
      done: true,
      createdAt: moment().subtract(2, 'hours').toDate()
    });

    Steps.collection.insert({
      outcomeId: outcomeId,
      name: 'cleaning right corner',
      done: false,
      createdAt: moment().subtract(1, 'hours').toDate()
    });

    outcomeId = Outcomes.collection.insert({
      name: 'colegend app',
      status: OutcomeStatus.OPEN,
      scope: OutcomeScope.DAY,
      deadline: moment().add(4, 'days').toDate(),
      start: moment().add(2, 'days').toDate(),
      createdAt: moment().subtract(4, 'hours').toDate()
    });

  }
}
