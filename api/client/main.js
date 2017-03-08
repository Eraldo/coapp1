import {Template} from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Template.api.onCreated(function() {
  this.text = 'Please refresh your app.';
  if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function (err) {
      if (err != null) {
        if (err.message = 'Verify email link expired [403]') {
          message = 'Sorry this verification link has expired.';
          console.log(message);
          alert(message)
        }
      } else {
        message = 'Thank you! Your email address has been confirmed.';
        data.message = message;
        console.log(message);
        alert(message)
      }
    });
  }
});

Template.api.helpers({
  message: function () {
    return Template.instance().text;
  }
});
