import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">Reorder</button>
    </ion-list>
  `
})
export class OutcomesOptionsPage {
  action: string;

  constructor(public viewCtrl: ViewController) {
  }

  close() {
    let data = true;
    this.viewCtrl.dismiss(data);
  }
}
