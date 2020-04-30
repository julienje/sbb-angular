/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconEnvelopeMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M20.985 18l8.265 8.25m-22.5 0L15 18m14.25-8.25L17.97 21 6.75 9.75m0 16.5h22.5V9.75H6.75v16.5z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconEnvelopeMedium {}

@Component({
  selector: 'sbb-icon-envelope-medium',
  template: `
    <svg sbbIconEnvelopeMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconEnvelopeMedium {}

@NgModule({
  declarations: [SvgIconEnvelopeMedium, IconEnvelopeMedium],
  exports: [SvgIconEnvelopeMedium, IconEnvelopeMedium]
})
export class IconEnvelopeMediumModule {}