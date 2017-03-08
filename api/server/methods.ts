import {Outcomes} from "./collections/outcomes";
import {Steps} from "./collections/steps";
import {Profile, OutcomeStatus, Outcome, OutcomeScope} from "./models";

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
  loginGoogle(): void {
    // console.log('Meteor with google: ');
    // console.log(Meteor.loginWithGoogle);
    // Meteor.loginWithGoogle();
    // Meteor.loginWithGoogle({loginStyle: 'popup'}, (e: Error) => {
    //   if (e) {
    //     throw new Meteor.Error(e.name, e.message);
    //   }
    //   // resolve();
    // });
  },
  // loginGoogle(): Promise<void> {
  //   return new Promise<void>((resolve, reject) => {
  //     // Meteor.loginWithGoogle({loginStyle: 'popup', 'redirectUrl': 'http://localhost:3000/_oauth/google?close'}, (e: Error) => {
  //     Meteor.loginWithGoogle({loginStyle: 'popup'}, (e: Error) => {
  //       if (e) {
  //         return reject(e);
  //       }
  //       resolve();
  //     });
  //   });
  // },
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
    if (!this.userId) throw new Meteor.Error('unauthorized',
      'User must be logged-in to create a new step');

    check(outcomeId, nonEmptyString);
    check(name, nonEmptyString);

    const outcomeExists = !!Outcomes.collection.find(outcomeId).count();

    if (!outcomeExists) {
      throw new Meteor.Error('outcome-not-exists',
        'Outcome doesn\'t exist');
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
  },
  addOutcome(outcome: Outcome) {
    if (!this.userId) throw new Meteor.Error('unauthorized',
      'User must be logged-in to create a new outcome');

    check(outcome.name, nonEmptyString);

    return {
      outcomeId: Outcomes.collection.insert({
        userId: this.userId,
        name: outcome.name,
        status: outcome.status || OutcomeStatus.OPEN,
        inbox: outcome.inbox || true,
        scope: outcome.scope || OutcomeScope.DAY,
        deadline: outcome.deadline,
        start: outcome.start,
        content: outcome.content,
        createdAt: new Date()
      })
    };
  },
});
