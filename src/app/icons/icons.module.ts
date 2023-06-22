import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { Star, ShoppingCart, ChevronRight, User } from 'angular-feather/icons';

const icons = {
  Star,
  ShoppingCart,
  ChevronRight,
  User,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule, CommonModule],
})
export class IconsModule {}
