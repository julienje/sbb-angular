import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbbIconModule, ɵSBB_ICON_REGISTRY_WRAPPER_PROVIDER } from '@sbb-esta/angular-core/icon';

import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule, SbbIconModule],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
  providers: [ɵSBB_ICON_REGISTRY_WRAPPER_PROVIDER],
})
export class CheckboxModule {}
