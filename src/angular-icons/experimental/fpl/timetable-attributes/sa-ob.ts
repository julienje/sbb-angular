/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaOb]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M5.3 9.599c0 1.82.92 3.44 2.942 3.44 3.2 0 4.98-3.84 4.98-6.62 0-1.861-.96-3.421-2.98-3.421-3.26 0-4.941 3.78-4.941 6.6m10.843-2.88c0 2.28-.84 4.502-2.341 6.182-1.46 1.62-3.581 2.34-5.921 2.34-3.441 0-5.501-2.48-5.501-5.8 0-2.221.78-4.381 2.2-6.042 1.52-1.74 3.46-2.6 5.74-2.6 3.782 0 5.823 2.2 5.823 5.92M21.401 6.679h1.101c1.42 0 2.961-.4 2.961-2.041 0-1.34-1.28-1.4-2.34-1.4h-.982l-.74 3.44zm-1.28 6.12h.96c1.72 0 3.641-.2 3.641-2.36 0-1.46-1.36-1.68-2.86-1.68h-.9l-.84 4.04zm-.22-11.761h4.141c2.18 0 4.22.8 4.22 3.34 0 1.7-1.36 3.06-2.98 3.32v.04c1.56.24 2.24 1.44 2.24 2.942 0 4-4.48 4.32-6.56 4.32H16.98l2.921-13.962z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 30px;
        height: 16px;
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
    viewBox: '0 0 30 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaOb {}

@Component({
  selector: 'sbb-icon-sa-ob',
  template: `
    <svg sbbIconSaOb></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaOb {}

@NgModule({
  declarations: [SvgIconSaOb, IconSaOb],
  exports: [SvgIconSaOb, IconSaOb]
})
export class IconSaObModule {}