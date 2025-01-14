import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * @title Form Field Group Vertical
 * @order 100
 */
@Component({
  selector: 'sbb-form-field-group-vertical-example',
  templateUrl: 'form-field-group-vertical-example.html',
})
export class FormFieldGroupVerticalExample {
  formGroup: FormGroup;
  lastSubmission?: { name: string; date: Date };

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: [new Date(), Validators.required],
    });
  }

  handleSubmit() {
    if (!this.formGroup.valid) {
      return;
    }
    this.lastSubmission = this.formGroup.value;
  }
}
