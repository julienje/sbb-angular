import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-two-adults-kid',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M13.497 10.5a2 2 0 11-.001 4.001 2 2 0 01.001-4.001zm-2 27v2.499m4-2.499v2.499m-7-10.499l2-12h6l2 12m-1 8l-1-9.999h-6l-1 9.999h8zm8.001-27a2 2 0 11-.001 4.001 2 2 0 01.001-4.001zm-2 17.001v12.498m4-12.498v12.498m-6-10.499v-12h8v12m-8-1.999h8m7.001-9a2 2 0 11-.001 4.001 2 2 0 01.001-4.002zm-2 14v7.498m4-7.498v7.498m-6-5.499l1-9h5.999l1.001 9m-7.78-1.999h7.558"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTwoAdultsKidComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTwoAdultsKidComponent],
  exports: [IconTwoAdultsKidComponent]
})
export class IconTwoAdultsKidModule {}