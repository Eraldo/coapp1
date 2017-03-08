import {ActionPage} from "./action/action";
import {ManagerPage} from "./manager";
import {AgendaPage} from "./agenda/agenda";
import {OutcomesPage, } from "./outcomes/outcomes";
import {InboxPage} from "./inbox/inbox";
import {OutcomePage} from "./outcome/outcome";
import {NewOutcomePage} from "./outcome/new-outcome";
import {StepComponent} from "./outcomes/step.component";

export const MANAGER_DECLARATIONS = [
  ManagerPage,
  ActionPage,
  AgendaPage,
  OutcomesPage,
  OutcomePage,
  StepComponent,
  NewOutcomePage,
  InboxPage
];
