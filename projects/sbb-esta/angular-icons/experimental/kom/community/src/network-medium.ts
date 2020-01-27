/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconNetworkMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M14.306 21.754A5.232 5.232 0 0112.75 18a5.21 5.21 0 012.113-4.225l-4.4-6.044A2.258 2.258 0 019 8.25c-1.275 0-2.25-.975-2.25-2.25S7.725 3.75 9 3.75s2.25.975 2.25 2.25c0 .708-.3 1.324-.787 1.731l4.4 6.044A5.258 5.258 0 0118 12.756c2.931 0 5.252 2.313 5.252 5.244 0 2.931-2.321 5.25-5.252 5.25-1.45 0-2.75-.567-3.694-1.496l-3.936 3.84a3.007 3.007 0 00-2.12-.844c-1.694 0-3 1.303-3 2.997 0 1.695 1.306 3.003 3 3.003 1.695 0 3.009-1.308 3.009-3.003a2.98 2.98 0 00-.89-2.153zm12.216.208l-3.753-1.737 3.753 1.737c.467-1.028 1.49-1.712 2.728-1.712 1.704 0 3 1.296 3 3s-1.296 3-3 3-3-1.296-3-3c0-.466.097-.901.272-1.288zm.125-10.166l-4.413 3.073 4.413-3.073a2.266 2.266 0 01-.397-1.296c0-1.266.984-2.258 2.25-2.258a2.24 2.24 0 012.265 2.258c0 1.266-1 2.25-2.265 2.25a2.228 2.228 0 01-1.853-.954z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconNetworkMedium {}

@Component({
  selector: 'sbb-icon-network-medium',
  template: `
    <svg sbbIconNetworkMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconNetworkMedium {}

@NgModule({
  declarations: [SvgIconNetworkMedium, IconNetworkMedium],
  exports: [SvgIconNetworkMedium, IconNetworkMedium]
})
export class IconNetworkMediumModule {}