/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLighthouseMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M21.75 14.25V7.5a3.75 3.75 0 10-7.5 0v6.75l-3 18h13.5l-3-18zm-14.25 18h21m-16.5-18h12m3-3h3m1.5 0H33m-6-3l5.25-3m-5.25 9l5.25 3M9 11.25H6m-1.5 0H3m6-3l-5.25-3m5.25 9l-5.25 3m8.25-9h12"
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
export class SvgIconLighthouseMedium {}

@Component({
  selector: 'sbb-icon-lighthouse-medium',
  template: `
    <svg sbbIconLighthouseMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLighthouseMedium {}

@NgModule({
  declarations: [SvgIconLighthouseMedium, IconLighthouseMedium],
  exports: [SvgIconLighthouseMedium, IconLighthouseMedium]
})
export class IconLighthouseMediumModule {}