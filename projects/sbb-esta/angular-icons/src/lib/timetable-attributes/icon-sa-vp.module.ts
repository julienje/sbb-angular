/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-sa-vp',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.141 1.037h2.801l1.3 10.862h.04l5.801-10.862h3.04L8.322 15H4.981zM19.161 7.498h1c1.54 0 3.121-.8 3.121-2.54 0-1.421-1.14-1.721-2.34-1.721h-.88l-.9 4.261zM17.561 15h-2.8l2.96-13.963h2.36c2.581 0 6.121.14 6.121 3.621 0 3.38-2.78 5.041-5.9 5.041h-1.62L17.56 15z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaVpComponent extends IconBase {
  constructor() {
    super({ width: '27px', height: '16px', ratio: 1.6875 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaVpComponent],
  exports: [IconSaVpComponent]
})
export class IconSaVpModule {}
