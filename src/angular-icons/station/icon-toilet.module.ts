import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-toilet',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M6.5 5.5a1 1 0 11-2.001 0 1 1 0 012 0zm1 8v-5h-4v5h1v6h2v-6h1zm11 2v4h-2v-4m2-10a1 1 0 11-2 0 1 1 0 012 0zm2 10l-2-7h-2l-2 7h6zM11.5 4v16"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M9.75 8.25a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zm1.5 12v-7.5h-6v7.5h1.5v9h3v-9h1.5zm16.5 3v6h-3v-6m3-15a1.5 1.5 0 11-3 .001 1.5 1.5 0 013 0zm3 15l-3-10.5h-3l-3 10.5h9zM17.25 6v24"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconToiletComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconToiletComponent],
  exports: [IconToiletComponent]
})
export class IconToiletModule {}