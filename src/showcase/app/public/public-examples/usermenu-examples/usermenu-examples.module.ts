import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownModule } from '@sbb-esta/angular-public/dropdown';
import { UsermenuModule } from '@sbb-esta/angular-public/usermenu';

import { UsermenuExampleComponent } from './usermenu-example/usermenu-example.component';

const EXAMPLES = [UsermenuExampleComponent];

@NgModule({
  imports: [CommonModule, RouterModule, DropdownModule, UsermenuModule],
  declarations: EXAMPLES,
  exports: EXAMPLES
})
export class UsermenuExamplesModule {}