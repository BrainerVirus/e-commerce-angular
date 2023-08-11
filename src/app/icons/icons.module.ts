import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import {
  Star,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  User,
  Truck,
  Twitter,
  Instagram,
  Facebook,
  Sun,
  Moon,
} from 'angular-feather/icons';

const icons = {
  Star,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
  User,
  ChevronDown,
  Truck,
  Twitter,
  Instagram,
  Facebook,
  Sun,
  Moon,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule, CommonModule],
})
export class IconsModule {}
