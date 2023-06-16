import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { Star, ShoppingCart, Check } from 'angular-feather/icons';

const icons = {
  Star,
  ShoppingCart,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule, CommonModule],
})
export class IconsModule {}
