import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sbb-datepicker-showcase',
  templateUrl: './datepicker-showcase.component.html',
  styleUrls: ['./datepicker-showcase.component.scss']
})
export class DatepickerShowcaseComponent {
  today = new Date();

  minDate = new Date('2018-06-20');
  maxDate = new Date('2018-11-28');

  laData = new FormControl(this.today);

  withoutToggle = false;
  withArrows = true;


  onlyInput($event) {
    if ($event.target.checked) {
      this.withoutToggle = true;
      this.withArrows = false;
    } else {
      this.withoutToggle = false;
      this.withArrows = true;
    }

  }

  closedEvent() {
    console.log('CLOSED');
  }

  openedEvent() {
    console.log('OPENED');
  }

  dateChangeEvent($event) {
    console.log('DATE_CHANGED', $event);
  }

  dateInputEvent($event) {
    console.log('DATE_INPUT', $event);
  }
}
