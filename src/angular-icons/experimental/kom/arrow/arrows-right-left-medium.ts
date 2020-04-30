/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowsRightLeftMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M7.5 11.236h18.735M20.25 17.25l5.985-6.014L20.25 5.25M27 24.738H8.25m5.985 6.013L8.25 24.738l5.985-5.987"
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
export class SvgIconArrowsRightLeftMedium {}

@Component({
  selector: 'sbb-icon-arrows-right-left-medium',
  template: `
    <svg sbbIconArrowsRightLeftMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconArrowsRightLeftMedium {}

@NgModule({
  declarations: [SvgIconArrowsRightLeftMedium, IconArrowsRightLeftMedium],
  exports: [SvgIconArrowsRightLeftMedium, IconArrowsRightLeftMedium]
})
export class IconArrowsRightLeftMediumModule {}