/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconAdultKidsLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M25.501 34.5l1-9h6l1 9M9.5 10.5a2 2 0 11-.001 4.001A2 2 0 019.5 10.5zm-2 17.001v12.498m4-12.498v12.498M5.5 29.5v-12h8v12m-8-1.999h8m16.001-9a2 2 0 11-.001 4.001A2 2 0 0129.5 18.5zm-2 14v7.498m4.001-7.498v7.498m-5.778-7.498h7.556m2.222 1.999l1-9h6l1 9m-4-16a2 2 0 11-.001 4.002 2 2 0 01.001-4.002zm-2 14.001v7.498m4-7.498v7.498m-5.778-7.498h7.556M15.5 34.5l1-9H22.5l1.001 9m-4-16a2 2 0 11-.002 4.002 2 2 0 01.002-4.002zm-2 14.001v7.498m4-7.498v7.498m-5.778-7.498h7.556"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-leisure',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconAdultKidsLarge {}

@Component({
  selector: 'sbb-icon-adult-kids-large',
  template: `
    <svg sbbIconAdultKidsLarge></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconAdultKidsLarge {}

@NgModule({
  declarations: [SvgIconAdultKidsLarge, IconAdultKidsLarge],
  exports: [SvgIconAdultKidsLarge, IconAdultKidsLarge]
})
export class IconAdultKidsLargeModule {}