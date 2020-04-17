/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBinocularsSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.501 18c0 1.954-1.547 3.5-3.501 3.5A3.473 3.473 0 013.5 18 3.47 3.47 0 017 14.505 3.47 3.47 0 0110.501 18zm10 0c0 1.954-1.547 3.5-3.501 3.5a3.473 3.473 0 01-3.5-3.5 3.47 3.47 0 013.5-3.495A3.47 3.47 0 0120.501 18zm-5.001.001c0-.838.663-1.499 1.5-1.499m-10.001 0c-.838 0-1.499.662-1.499 1.5M3.5 18l1-8.5 2-1 1-4h3v3.537M20.501 18l-1-8.5-2-1-1-4h-3L13.5 8m-5 5A3.47 3.47 0 0112 9.504 3.47 3.47 0 0115.501 13m-5 5V9.845m3 8.155L13.5 9.845"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconBinocularsSmall {}

@Component({
  selector: 'sbb-icon-binoculars-small',
  template: `
    <svg sbbIconBinocularsSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBinocularsSmall {}

@NgModule({
  declarations: [SvgIconBinocularsSmall, IconBinocularsSmall],
  exports: [SvgIconBinocularsSmall, IconBinocularsSmall]
})
export class IconBinocularsSmallModule {}