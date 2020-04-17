import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ic-51',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="59" height="20" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M44.057 4.235v2.057h-4.644l-.496 2.602a2.808 2.808 0 012.136-.886 3.678 3.678 0 012.223.689c.935.69 1.403 1.74 1.403 3.148 0 1.382-.499 2.476-1.497 3.283a4.283 4.283 0 01-2.791.949c-1.22 0-2.2-.328-2.94-.985-.742-.656-1.133-1.544-1.175-2.662h2.262c.026.377.163.738.394 1.036a1.917 1.917 0 002.901.016c.348-.443.529-.994.513-1.558.029-.58-.163-1.15-.536-1.594a1.824 1.824 0 00-1.427-.597 1.895 1.895 0 00-1.695.98l-2.058-.03 1.096-6.448h6.33zm7.181 0V15.8h-2.302V8.23h-2.711V6.553a5.795 5.795 0 001.375-.174c.353-.1.684-.266.974-.49.426-.327.712-.878.859-1.654h1.805zM9.221 4.2h4.056L8.259 15.8H4.186zM15.948 4.2h14.395l-1.49 3.445H18.572l-2.041 4.71h10.285l-1.49 3.445H10.931z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconProductIc51Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIc51Component],
  exports: [IconProductIc51Component]
})
export class IconProductIc51Module {}