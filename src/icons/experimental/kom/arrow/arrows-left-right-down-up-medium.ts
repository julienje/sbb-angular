/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowsLeftRightDownUpMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.25 4.125v26.25m5.779-20.409l-5.78-5.841-5.763 5.844m-.012 14.564l5.78 5.841 5.763-5.845M25.125 12l5.25 5.25-5.25 5.25m-15.75 0l-5.25-5.25L9.375 12m21 5.252l-26.25-.001"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconArrowsLeftRightDownUpMedium {}

@Component({
  selector: 'sbb-icon-arrows-left-right-down-up-medium',
  template: `
    <svg sbbIconArrowsLeftRightDownUpMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconArrowsLeftRightDownUpMedium {}

@NgModule({
  declarations: [SvgIconArrowsLeftRightDownUpMedium, IconArrowsLeftRightDownUpMedium],
  exports: [SvgIconArrowsLeftRightDownUpMedium, IconArrowsLeftRightDownUpMedium]
})
export class IconArrowsLeftRightDownUpMediumModule {}