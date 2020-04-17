/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSa1]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path d="M1 1h11.667v14H1V1zm1.296 12.727h9.074V2.273H2.296v11.454z" />
      <svg:path d="M7.218 12.455V5.628L5.77 7.132 4.89 5.796l2.51-2.25h1.379v8.909h-1.56" />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 14px;
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
    viewBox: '0 0 14 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSa1 {}

@Component({
  selector: 'sbb-icon-sa-1',
  template: `
    <svg sbbIconSa1></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSa1 {}

@NgModule({
  declarations: [SvgIconSa1, IconSa1],
  exports: [SvgIconSa1, IconSa1]
})
export class IconSa1Module {}