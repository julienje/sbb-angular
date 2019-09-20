/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-lighthouse',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M14.5 9.5V5a2.5 2.5 0 10-5 0v4.5l-2 12h9l-2-12zM5 21.5h14M8 9.5h8m2-2h2m1 0h1m-4-2l3.5-2m-3.5 6l3.5 2M6 7.5H4m-1 0H2m4-2l-3.5-2m3.5 6l-3.5 2m5.5-6h8"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M21.75 14.25V7.5a3.75 3.75 0 10-7.5 0v6.75l-3 18h13.5l-3-18zm-14.25 18h21m-16.5-18h12m3-3h3m1.5 0H33m-6-3l5.25-3m-5.25 9l5.25 3M9 11.25H6m-1.5 0H3m6-3l-5.25-3m5.25 9l-5.25 3m8.25-9h12"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLighthouseComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLighthouseComponent],
  exports: [IconLighthouseComponent]
})
export class IconLighthouseModule {}
