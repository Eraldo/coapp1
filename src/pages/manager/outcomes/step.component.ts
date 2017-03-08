import {Component, Input, Output, EventEmitter} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'step',
  templateUrl: 'step.component.html'
})
export class StepComponent {
  // we will pass in step from App component
  @Input('group')
  public stepForm: FormGroup;
  // notify removal click
  @Output()
  removeEvent = new EventEmitter();

  remove() {
    this.removeEvent.emit('remove');
  }
}
