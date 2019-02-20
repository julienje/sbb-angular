import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { DropdownModule } from '../dropdown/dropdown';
import { IconArrowSmallDownModule } from '../svg-icons/svg-icons';

@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule, DropdownModule,IconArrowSmallDownModule
  ],
  exports: [UserMenuComponent, DropdownModule]
})
export class UserMenuModule { }
