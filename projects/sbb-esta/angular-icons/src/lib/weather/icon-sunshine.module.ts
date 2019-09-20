/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-sunshine',
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
          d="M16.5 12.5a3.98 3.98 0 01-3.977 3.994 3.995 3.995 0 01-3.995-3.995c0-2.207 1.765-3.999 3.972-3.999 2.206 0 4 1.793 4 4zM4 12.5h3.003H4zm2.393-6.184L8.67 8.593 6.393 6.316zm6.119-2.328v3.015-3.015zm6.145 2.42l-2.264 2.238 2.264-2.238zM21 12.5h-3.006H21zm-2.33 6.093l-2.266-2.257 2.267 2.257zm-6.17-.6v3.003-3.003zm-3.843-1.592l-2.262 2.261 2.262-2.26z"
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
          d="M24.75 18.75c0 3.309-2.657 5.991-5.965 5.991a5.992 5.992 0 01-5.993-5.992c0-3.311 2.648-5.999 5.958-5.999 3.309 0 6 2.69 6 6zM6 18.75h4.505H6zm3.589-9.276l3.415 3.415L9.59 9.474zm9.179-3.492v4.522-4.522zm9.218 3.63l-3.396 3.357 3.396-3.357zM31.5 18.75h-4.509H31.5zm-3.494 9.14l-3.4-3.386 3.4 3.385zm-9.256-.9v4.504-4.504zm-5.764-2.388l-3.393 3.392 3.393-3.392z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSunshineComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSunshineComponent],
  exports: [IconSunshineComponent]
})
export class IconSunshineModule {}
