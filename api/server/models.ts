export interface User extends Meteor.User {
  profile?: Profile;
}

export const DEFAULT_PICTURE_URL = '/assets/default-profile-picture.svg';

export interface Profile {
  name?: string;
  picture?: string;
}

export enum OutcomeStatus {
  OPEN = <any>'open',
  WAITING = <any>'waiting',
  DONE = <any>'done',
  CANCELED = <any>'canceled',
}
export const OUTCOME_STATUSES: OutcomeStatus[] = [OutcomeStatus.OPEN, OutcomeStatus.WAITING, OutcomeStatus.DONE, OutcomeStatus.CANCELED];

export enum OutcomeScope {
  DAY = <any>'day',
  WEEK = <any>'week',
  MONTH = <any>'month',
  YEAR = <any>'year',
}
export const OUTCOME_SCOPES: OutcomeScope[] = [OutcomeScope.DAY, OutcomeScope.WEEK, OutcomeScope.MONTH, OutcomeScope.YEAR];

export enum OutcomeType {
  SYSTEM = <any>'system'
}

export interface Outcome {
  _id?: string;
  userId?: string;
  name?: string;
  inbox?: boolean;
  status?: OutcomeStatus;
  scope?: OutcomeScope;
  deadline?: Date;
  start?: Date;
  content?: string;
  type?: OutcomeType;
  createdAt?: Date;
}

export interface Step {
  _id?: string;
  outcomeId?: string;
  name?: string;
  done?: boolean;
  createdAt?: Date;

}
