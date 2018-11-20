import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import {
  IconCommonModule,
  TextareaModule,
  FieldModule,
  LinksModule,
  RadioButtonModule,
  CheckboxModule,
  ButtonModule,
  AutocompleteModule,
  TimeInputModule
} from 'sbb-angular';

import { LinksShowcaseComponent } from './links-showcase/links-showcase.component';
import { RadioButtonShowcaseComponent } from './radio-button-showcase/radio-button-showcase.component';
import { CheckboxShowcaseComponent } from './checkbox-showcase/checkbox-showcase.component';
import { TextareaShowcaseComponent } from './textarea-showcase/textarea-showcase.component';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { AutocompleteShowcaseComponent } from './autocomplete-showcase/autocomplete-showcase.component';
import { TimeInputShowcaseComponent } from './time-input-showcase/time-input-showcase.component';
import { InputFieldShowcaseComponent } from './text-input-showcase/text-input-showcase.component';
import { SbbFieldShowcaseComponent } from './field-showcase/field-showcase.component';
import { DatepickerShowcaseComponent } from './datepicker-showcase/datepicker-showcase.component';
import { DateAdapter, SBB_DATE_FORMATS, DatepickerModule } from 'projects/sbb-angular/src/public_api';
import { FnsDateAdapter } from 'projects/sbb-angular/src/lib/datepicker/fns-date-adapter';
import { FNS_DATE_FORMATS } from 'projects/sbb-angular/src/lib/datepicker/fns-date-formats';

@NgModule({
  declarations: [
    TextareaShowcaseComponent,
    LinksShowcaseComponent,
    AutocompleteShowcaseComponent,
    ButtonShowcaseComponent,
    RadioButtonShowcaseComponent,
    CheckboxShowcaseComponent,
    InputFieldShowcaseComponent,
    SbbFieldShowcaseComponent,
    DatepickerShowcaseComponent,
    TimeInputShowcaseComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TextareaModule,
    FieldModule,
    LinksModule,
    AutocompleteModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
    RadioButtonModule,
    CheckboxModule,
    DatepickerModule,
    TimeInputModule,
    IconCommonModule
  ],
  providers: [
    { provide: DateAdapter, useClass: FnsDateAdapter},
    { provide: SBB_DATE_FORMATS, useValue: FNS_DATE_FORMATS }
  ],
  exports: [
    TextareaShowcaseComponent,
    LinksShowcaseComponent,
    AutocompleteShowcaseComponent,
    ButtonShowcaseComponent,
    RadioButtonShowcaseComponent,
    CheckboxShowcaseComponent,
    InputFieldShowcaseComponent,
    SbbFieldShowcaseComponent,
    DatepickerShowcaseComponent,
    TimeInputShowcaseComponent,
    ButtonModule
  ],

})
export class ExamplesModule { }
