import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SbbIconTestingModule } from '@sbb-esta/angular-core/icon/testing';
import { createMouseEvent, dispatchEvent } from '@sbb-esta/angular-core/testing';

import { SbbCheckboxPanelModule } from '../checkbox-panel.module';

import { SbbCheckboxPanel } from './checkbox-panel.component';

// tslint:disable:i18n
@Component({
  selector: 'sbb-model-sbb-checkbox-panel-test',
  template: `
    <sbb-checkbox-panel [(ngModel)]="checkValue1" name="test-option" value="1">
      Test option selection 1
    </sbb-checkbox-panel>
    <sbb-checkbox-panel [(ngModel)]="checkValue2" name="test-option" value="2">
      Test option selection 2
    </sbb-checkbox-panel>
  `,
})
class ModelOptionSelectionMultipleTestComponent {
  checkValue1 = false;
  checkValue2 = false;
  @ViewChildren(SbbCheckboxPanel) optionSelections: QueryList<SbbCheckboxPanel>;
}

describe('SbbCheckboxPanel', () => {
  let component: SbbCheckboxPanel;
  let fixture: ComponentFixture<SbbCheckboxPanel>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule, SbbCheckboxPanelModule, SbbIconTestingModule],
        declarations: [ModelOptionSelectionMultipleTestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbCheckboxPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a generated id if not provided', () => {
    expect(component.inputId).toContain('sbb-checkbox-panel-');
  });
});

describe('SbbCheckboxPanel using mock component', () => {
  let modelComponent: ModelOptionSelectionMultipleTestComponent;
  let modelComponentFixture: ComponentFixture<ModelOptionSelectionMultipleTestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule, SbbCheckboxPanelModule, SbbIconTestingModule],
        declarations: [ModelOptionSelectionMultipleTestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    modelComponentFixture = TestBed.createComponent(ModelOptionSelectionMultipleTestComponent);
    modelComponent = modelComponentFixture.componentInstance;

    modelComponentFixture.detectChanges();
  });

  it('should create', () => {
    expect(modelComponent).toBeTruthy();
  });

  it('should create mock component and should contain two sbb-checkbox-panel components', () => {
    expect(modelComponent).toBeTruthy();

    const optionSelectionComponents = modelComponentFixture.debugElement.queryAll(
      By.directive(SbbCheckboxPanel)
    );
    expect(optionSelectionComponents).toBeTruthy();
    expect(optionSelectionComponents.length).toBe(2);
  });

  it('should not be mutual exclusive', async () => {
    const opt1: SbbCheckboxPanel = modelComponent.optionSelections.toArray()[0];
    const opt2: SbbCheckboxPanel = modelComponent.optionSelections.toArray()[1];

    await modelComponentFixture.whenRenderingDone();

    opt1.toggle();
    modelComponentFixture.detectChanges();

    let checkedComponents = modelComponent.optionSelections.filter((o) => !!o.checked);
    expect(checkedComponents.length).toBe(1);

    opt2.toggle();
    modelComponentFixture.detectChanges();

    checkedComponents = modelComponent.optionSelections.filter((o) => !!o.checked);
    expect(checkedComponents.length).toBe(2);
  });

  it('should checked if model is true', async () => {
    const opt1: SbbCheckboxPanel = modelComponent.optionSelections.toArray()[0];
    const opt2: SbbCheckboxPanel = modelComponent.optionSelections.toArray()[1];

    modelComponent.checkValue1 = true;
    modelComponentFixture.detectChanges();

    await modelComponentFixture.whenStable();

    expect(opt1.checked).toBe(true);
    expect(modelComponent.checkValue1).toBe(true);

    const element = modelComponentFixture.debugElement.queryAll(By.css('label'))[1];
    dispatchEvent(element.nativeElement, createMouseEvent('click'));
    modelComponentFixture.detectChanges();

    await modelComponentFixture.whenStable();
    expect(opt2.checked).toBe(true);
    expect(modelComponent.checkValue2).toBe(true);
  });
});
