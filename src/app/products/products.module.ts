import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { ButtonComponent } from '../shared/components/button/button.component';
import { RatingComponent } from '../products/components/rating/rating.component';

import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { CardComponent } from './components/card/card.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [
    ProductGridComponent,
    CardComponent,
    ButtonComponent,
    RatingComponent,
  ],
  imports: [CommonModule, HttpClientModule, NgOptimizedImage, IconsModule],
})
export class ProductsModule {}
