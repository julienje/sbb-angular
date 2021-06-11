import { Component, DebugElement, ViewChild, ViewEncapsulation } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SbbBadge, SbbBadgeModule, SbbBadgePosition } from './index';

describe('SbbBadge', () => {
  let fixture: ComponentFixture<any>;
  let testComponent: BadgeTestApp;
  let badgeNativeElement: HTMLElement;
  let badgeDebugElement: DebugElement;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [SbbBadgeModule],
      declarations: [BadgeTestApp, PreExistingBadge, NestedBadge, BadgeOnTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeTestApp);
    testComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    badgeDebugElement = fixture.debugElement.query(By.directive(SbbBadge))!;
    badgeNativeElement = badgeDebugElement.nativeElement;
  }));

  it('should update the badge based on attribute', () => {
    const badgeElement = badgeNativeElement.querySelector('.sbb-badge-content')!;
    expect(badgeElement.textContent).toContain('1');

    testComponent.badgeContent = '22';
    fixture.detectChanges();
    expect(badgeElement.textContent).toContain('22');
  });

  it('should be able to pass in falsy values to the badge content', () => {
    const badgeElement = badgeNativeElement.querySelector('.sbb-badge-content')!;
    expect(badgeElement.textContent).toContain('1');

    testComponent.badgeContent = 0;
    fixture.detectChanges();
    expect(badgeElement.textContent).toContain('0');
  });

  it('should treat null and undefined as empty strings in the badge content', () => {
    const badgeElement = badgeNativeElement.querySelector('.sbb-badge-content')!;
    expect(badgeElement.textContent).toContain('1');

    testComponent.badgeContent = null;
    fixture.detectChanges();
    expect(badgeElement.textContent?.trim()).toBe('');

    testComponent.badgeContent = undefined;
    fixture.detectChanges();
    expect(badgeElement.textContent?.trim()).toBe('');
  });

  it('should update the badge position on direction change', () => {
    expect(badgeNativeElement.classList.contains('sbb-badge-above')).toBe(true);

    testComponent.badgeDirection = 'after';
    fixture.detectChanges();

    expect(badgeNativeElement.classList.contains('sbb-badge-after')).toBe(true);
  });

  it('should change visibility to hidden', () => {
    expect(badgeNativeElement.classList.contains('sbb-badge-hidden')).toBe(false);

    testComponent.badgeHidden = true;
    fixture.detectChanges();

    expect(badgeNativeElement.classList.contains('sbb-badge-hidden')).toBe(true);
  });

  it('should toggle `aria-describedby` depending on whether the badge has a description', () => {
    const badgeContent = badgeNativeElement.querySelector('.sbb-badge-content')!;

    expect(badgeContent.getAttribute('aria-describedby')).toBeFalsy();

    testComponent.badgeDescription = 'Describing a badge';
    fixture.detectChanges();

    expect(badgeContent.getAttribute('aria-describedby')).toBeTruthy();

    testComponent.badgeDescription = '';
    fixture.detectChanges();

    expect(badgeContent.getAttribute('aria-describedby')).toBeFalsy();
  });

  it('should toggle visibility based on whether the badge has content', () => {
    const classList = badgeNativeElement.classList;

    expect(classList.contains('sbb-badge-hidden')).toBe(false);

    testComponent.badgeContent = '';
    fixture.detectChanges();

    expect(classList.contains('sbb-badge-hidden')).toBe(true);

    testComponent.badgeContent = 'hello';
    fixture.detectChanges();

    expect(classList.contains('sbb-badge-hidden')).toBe(false);

    testComponent.badgeContent = ' ';
    fixture.detectChanges();

    expect(classList.contains('sbb-badge-hidden')).toBe(true);

    testComponent.badgeContent = 0;
    fixture.detectChanges();

    expect(classList.contains('sbb-badge-hidden')).toBe(false);
  });

  it('should apply view encapsulation on create badge content', () => {
    const badge = badgeNativeElement.querySelector('.sbb-badge-content')!;
    let encapsulationAttr: Attr | undefined;

    for (let i = 0; i < badge.attributes.length; i++) {
      if (badge.attributes[i].name.startsWith('_ngcontent-')) {
        encapsulationAttr = badge.attributes[i];
        break;
      }
    }

    expect(encapsulationAttr).toBeTruthy();
  });

  it('should toggle a class depending on the badge disabled state', () => {
    const element: HTMLElement = badgeDebugElement.nativeElement;

    expect(element.classList).not.toContain('sbb-badge-disabled');

    testComponent.badgeDisabled = true;
    fixture.detectChanges();

    expect(element.classList).toContain('sbb-badge-disabled');
  });

  it('should update the aria-label if the description changes', () => {
    const badgeContent = badgeNativeElement.querySelector('.sbb-badge-content')!;

    fixture.componentInstance.badgeDescription = 'initial content';
    fixture.detectChanges();

    expect(badgeContent.getAttribute('aria-label')).toBe('initial content');

    fixture.componentInstance.badgeDescription = 'changed content';
    fixture.detectChanges();

    expect(badgeContent.getAttribute('aria-label')).toBe('changed content');

    fixture.componentInstance.badgeDescription = '';
    fixture.detectChanges();

    expect(badgeContent.hasAttribute('aria-label')).toBe(false);
  });

  it('should clear any pre-existing badges', () => {
    const preExistingFixture = TestBed.createComponent(PreExistingBadge);
    preExistingFixture.detectChanges();

    expect(preExistingFixture.nativeElement.querySelectorAll('.sbb-badge-content').length).toBe(1);
  });

  it('should not clear badge content from child elements', () => {
    const preExistingFixture = TestBed.createComponent(NestedBadge);
    preExistingFixture.detectChanges();

    expect(preExistingFixture.nativeElement.querySelectorAll('.sbb-badge-content').length).toBe(2);
  });

  it('should expose the badge element', () => {
    const badgeElement = badgeNativeElement.querySelector('.sbb-badge-content')!;
    expect(fixture.componentInstance.badgeInstance.getBadgeElement()).toBe(badgeElement);
  });

  it('should throw if badge is not attached to an element node', () => {
    expect(() => {
      TestBed.createComponent(BadgeOnTemplate);
    }).toThrowError(/sbbBadge must be attached to an element node/);
  });
});

/** Test component that contains a SbbBadge. */
@Component({
  // Explicitly set the view encapsulation since we have a test that checks for it.
  encapsulation: ViewEncapsulation.Emulated,
  styles: ['span { color: hotpink; }'],
  template: `
    <span
      [sbbBadge]="badgeContent"
      [sbbBadgePosition]="badgeDirection"
      [sbbBadgeHidden]="badgeHidden"
      [sbbBadgeDescription]="badgeDescription"
      [sbbBadgeDisabled]="badgeDisabled"
    >
      home
    </span>
  `,
})
class BadgeTestApp {
  @ViewChild(SbbBadge) badgeInstance: SbbBadge;
  badgeContent: string | number | undefined | null = '1';
  badgeDirection: SbbBadgePosition = 'above';
  badgeHidden = false;
  badgeDescription: string;
  badgeDisabled = false;
}

@Component({
  template: `
    <span sbbBadge="Hello">
      home
      <div class="sbb-badge-content">Pre-existing badge</div>
    </span>
  `,
})
class PreExistingBadge {}

@Component({
  template: `
    <span sbbBadge="Hello">
      home
      <span sbbBadge="Hi">Something</span>
    </span>
  `,
})
class NestedBadge {}

@Component({
  template: ` <ng-template sbbBadge="1">Notifications</ng-template> `,
})
class BadgeOnTemplate {}
