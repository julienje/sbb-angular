/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-realtime-alternative',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M12.988 2.5h-1.875v10.396H7.227l2.155-2.156-1.326-1.325-4.42 4.421 4.42 4.422 1.326-1.326-2.16-2.16h5.766"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRealtimeAlternativeComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 20 20', width: '20', height: '20' });
  }
}

@NgModule({
  declarations: [IconRealtimeAlternativeComponent],
  exports: [IconRealtimeAlternativeComponent],
})
export class IconRealtimeAlternativeModule { }
