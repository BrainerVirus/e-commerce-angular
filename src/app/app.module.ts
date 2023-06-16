import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { ButtonComponent } from './Components/button/button.component';
import { RatingComponent } from './Components/rating/rating.component';
import { IconsModule } from './icons/icons.module';
import { ProductGridComponent } from './Components/product-grid/product-grid.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    RatingComponent,
    ProductGridComponent,
    NavbarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    NgOptimizedImage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
