export enum OutcomeScope {
  INBOX = <any>'inbox',
  DAILY = <any>'daily',
  WEEKLY = <any>'weekly',
  MONTHLY = <any>'monthly',
  YEARLY = <any>'yearly',
}

export const OUTCOME_SCOPES: OutcomeScope[] = [OutcomeScope.INBOX, OutcomeScope.DAILY, OutcomeScope.WEEKLY, OutcomeScope.MONTHLY, OutcomeScope.YEARLY];

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
