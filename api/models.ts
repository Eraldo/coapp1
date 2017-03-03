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
  TEXT = <any>'text'
}

export interface Outcome {
  _id?: string;
  name?: string;
  createdAt?: Date;
  type?: OutcomeType;
  // steps: Step[]
}

// export interface Step {
//   _id?: string;
//   outcomeId?: string;
//   name?: string;
// }
