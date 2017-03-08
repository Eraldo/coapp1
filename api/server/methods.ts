import {Outcomes} from "./collections/outcomes";
import {Steps} from "./collections/steps";
import {Profile} from "./models";

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
  sendVerification(): void {
    let userId = Meteor.userId();
    if (!userId) throw new Meteor.Error('unauthorized',
      'Cannot send verification to anonymous user.');
    Accounts.sendVerificationEmail(userId);
  },
  updateProfile(profile: Profile): void {
    if (!this.userId) throw new Meteor.Error('unauthorized',
      'User must be logged-in to update the profile.');

    check(profile, {
      name: nonEmptyString
    });

    Meteor.users.update(this.userId, {
      $set: {profile}
    });
  },
  addStep(outcomeId: string, name: string) {
    check(outcomeId, nonEmptyString);
    check(name, nonEmptyString);

    const outcomeExists = !!Outcomes.collection.find(outcomeId).count();

    if (!outcomeExists) {
      throw new Meteor.Error('outcome-not-exists',
        'Chat doesn\'t exist');
    }

    return {
      stepId: Steps.collection.insert({
        outcomeId: outcomeId,
        name: name,
        done: false,
        createdAt: new Date()
      })
    };
  },
  countSteps(): number {
    return Steps.collection.find().count();
  }

});
