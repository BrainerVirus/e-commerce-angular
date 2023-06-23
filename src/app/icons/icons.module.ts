import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import {
  Star,
  ShoppingCart,
  ChevronRight,
  ChevronDown,
  User,
  Truck,
} from 'angular-feather/icons';

const icons = {
  Star,
  ShoppingCart,
  ChevronRight,
  User,
  ChevronDown,
  Truck,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule, CommonModule],
})
export class IconsModule {}
