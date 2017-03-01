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
