import {Meteor} from 'meteor/meteor';
import {Outcomes} from "./collections/outcomes";
import {Steps} from "./collections/steps";
import * as moment from 'moment';
import {OutcomeStatus, OutcomeScope} from "./models";
import {ServiceConfiguration} from 'meteor/service-configuration';
import {Users} from "./collections/users";

Meteor.startup(() => {
  // Meteor.absoluteUrl["defaultOptions"].rootUrl = "http://localhost:8100";
  // TODO: Disable for production!
  loadfixtures();
  if (Meteor.settings) {
    configGoogle()
  }
});

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
  loadUsers();
  loadOutcomes();
}

function loadUsers() {
  if (Users.find({}).cursor.count() === 0) {
    let users = [];
    let userId;

    userId = Accounts.createUser({
      email: 'tester1@mailinator.com',
      password: 'tester1',
      profile: {
        name: 'Tester1'
      }
    });
    Meteor.users.update(userId, {$set: {"emails.0.verified" :true}});
    users.push(userId);

    Accounts.createUser({
      email: 'tester2@mailinator.com',
      password: 'tester2',
      profile: {
        name: 'Tester2'
      }
    });
    Meteor.users.update(userId, {$set: {"emails.0.verified" :true}});
    users.push(userId);

    Accounts.createUser({
      email: 'tester3@mailinator.com',
      password: 'tester3',
      profile: {
        name: 'Tester3'
      }
    });
    Meteor.users.update(userId, {$set: {"emails.0.verified" :true}});
    users.push(userId);

    Accounts.createUser({
      email: 'tester4@mailinator.com',
      password: 'tester4',
      profile: {
        name: 'Tester4'
      }
    });
    Meteor.users.update(userId, {$set: {"emails.0.verified" :true}});
    users.push(userId);

    return users;
  }
}

function loadOutcomes() {
  if (Outcomes.find({}).cursor.count() === 0) {
    let userId = Users.findOne()._id;
    let outcomeId;

    outcomeId = Outcomes.collection.insert({
      userId: userId,
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
      userId: userId,
      name: 'colegend app',
      status: OutcomeStatus.OPEN,
      scope: OutcomeScope.DAY,
      deadline: moment().add(4, 'days').toDate(),
      start: moment().add(2, 'days').toDate(),
      createdAt: moment().subtract(4, 'hours').toDate()
    });

  }
}
