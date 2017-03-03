import { MongoObservable } from 'meteor-rxjs';
import { Outcome } from '../models';

export const Outcomes = new MongoObservable.Collection<Outcome>('outcomes');
