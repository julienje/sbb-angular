import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-weather-unknown',
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
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M16.02 14.5c2.15-.709 1.884-4.213-.32-4.125 1.102-3.737-3.813-5.454-5.317-2.02-1.324-1.092-3.443-.042-3.21 1.919-1.905 0-2.457 3.419-.199 4.19"
          />
          <path
            fill="#000"
            d="M11.026 16.999v-.838h.88v.838h-.88zm-1.39-4.077c.019-.5.118-.887.297-1.161.166-.252.386-.447.66-.584.275-.137.583-.205.926-.205.551 0 .99.154 1.316.463.304.285.456.66.456 1.124 0 .384-.103.714-.31.992-.092.126-.313.357-.664.696a2.222 2.222 0 00-.324.368 1.026 1.026 0 00-.128.365 3.193 3.193 0 00-.041.565h-.693c.006-.411.042-.717.111-.915.049-.146.118-.276.209-.391.091-.116.293-.331.606-.649.2-.203.332-.387.395-.551.051-.14.077-.283.077-.428 0-.268-.074-.494-.224-.676-.179-.223-.444-.335-.795-.335-.725 0-1.116.441-1.173 1.322h-.701z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M24.03 21.75c3.224-1.064 2.827-6.32-.48-6.188 1.654-5.605-5.719-8.18-7.976-3.03-1.986-1.637-5.165-.063-4.815 2.879-2.858 0-3.684 5.129-.297 6.285"
          />
          <path
            fill="#000"
            d="M16.539 25.498v-1.257h1.32V25.5h-1.32zm-2.085-6.115c.028-.75.177-1.33.445-1.741.25-.378.58-.671.99-.877a3.069 3.069 0 011.39-.307c.826 0 1.485.231 1.974.695.456.427.683.99.683 1.686 0 .576-.154 1.07-.465 1.488-.137.188-.469.535-.995 1.043a3.333 3.333 0 00-.486.552 1.54 1.54 0 00-.192.548c-.041.219-.062.5-.062.848h-1.04c.01-.617.063-1.076.167-1.373.073-.219.177-.414.314-.587.136-.174.439-.496.909-.973.3-.305.498-.58.592-.827.076-.21.116-.424.116-.642 0-.401-.111-.74-.337-1.014-.268-.334-.666-.502-1.192-.502-1.088 0-1.674.662-1.76 1.983h-1.051z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconWeatherUnknownComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWeatherUnknownComponent],
  exports: [IconWeatherUnknownComponent]
})
export class IconWeatherUnknownModule {}