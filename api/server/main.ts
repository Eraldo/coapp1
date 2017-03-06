import { Meteor } from 'meteor/meteor';
import {Outcomes} from "./collections/outcomes";
import {Steps} from "./collections/steps";
import * as moment from 'moment';
import {OutcomeStatus, OutcomeScope} from "../models";
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  loadfixtures();
  if (Meteor.settings) {
    // Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    configGoogle()
  }
});

function configGoogle() {
  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        // clientId: Meteor.settings.google.clientId,
        clientId: "1292962797",
        secret: "75a730b58f5691de5522789070c319bc"
        // loginStyle: "popup",
      }
    }
  );
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
