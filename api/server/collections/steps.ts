import { MongoObservable } from 'meteor-rxjs';
import { Step } from '../models';

export const Steps = new MongoObservable.Collection<Step>('steps');
