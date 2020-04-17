/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudSnowMoonSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M7.2 10.2c-2.14 0-2.567 4.3.8 4.3h7c3.477 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9zm10.175 1.304C18.636 11.9 21.51 11.208 22.5 9c-4.168 1.762-6.956-2.354-5.518-5.2-1.089.326-1.913 1-2.528 3.034M16 16.5a.5.5 0 11-1 0 .5.5 0 011 0zm-4 0a.5.5 0 11-1 0 .5.5 0 011 0zm-4 0a.5.5 0 11-1 0 .5.5 0 011 0zm6 2a.5.5 0 11-1 0 .5.5 0 011 0zm-4 0a.5.5 0 11-1 0 .5.5 0 011 0z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconCloudSnowMoonSmall {}

@Component({
  selector: 'sbb-icon-cloud-snow-moon-small',
  template: `
    <svg sbbIconCloudSnowMoonSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCloudSnowMoonSmall {}

@NgModule({
  declarations: [SvgIconCloudSnowMoonSmall, IconCloudSnowMoonSmall],
  exports: [SvgIconCloudSnowMoonSmall, IconCloudSnowMoonSmall]
})
export class IconCloudSnowMoonSmallModule {}