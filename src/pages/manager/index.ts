import {ActionPage} from "./action/action";
import {ManagerPage} from "./manager";
import {AgendaPage} from "./agenda/agenda";
import {OutcomesPage, } from "./outcomes/outcomes";
import {InboxPage} from "./inbox/inbox";
import {OutcomePage} from "./outcome/outcome";
import {OutcomeItem} from "./outcome/outcome-item";
import {NewOutcomePage} from "./outcome/new-outcome";
import {StepComponent} from "./outcomes/step.component";
import {OutcomeEditPage} from "./outcome/outcome-edit";
import {OutcomeForm} from "./outcome/outcome-form";

export const MANAGER_DECLARATIONS = [
  ManagerPage,
  ActionPage,
  AgendaPage,
  OutcomesPage,
  OutcomePage,
  OutcomeEditPage,
  NewOutcomePage,
  OutcomeItem,
  OutcomeForm,
  StepComponent,
  InboxPage
];
