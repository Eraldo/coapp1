import {Outcomes} from "./collections/outcomes";
import {Steps} from "./collections/steps";

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
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
