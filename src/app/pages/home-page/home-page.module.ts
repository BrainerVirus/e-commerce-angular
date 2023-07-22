import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './home-page.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RatingComponent } from './components/rating/rating.component';

import { IconsModule } from '../../icons/icons.module';
import { ProductService } from './components/product-grid/services/products.service';
import { SellingPointsComponent } from './components/selling-points/selling-points.component';
import { BannerSilderComponent } from './components/banner-silder/banner-silder.component';
import { BubblesSliderComponent } from './components/bubbles-slider/bubbles-slider.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ProductGridComponent,
    CardComponent,
    ButtonComponent,
    RatingComponent,
    SellingPointsComponent,
    BannerSilderComponent,
    BubblesSliderComponent,
  ],
  imports: [CommonModule, HttpClientModule, NgOptimizedImage, IconsModule],
  providers: [ProductService],
})
export class HomePageModule {}
