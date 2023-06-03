import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { ButtonComponent } from './Components/button/button.component';
import { RatingComponent } from './Components/rating/rating.component';
import { IconsModule } from './icons/icons.module';
import { ProductGridComponent } from './Components/product-grid/product-grid.component';

@NgModule({
  declarations: [AppComponent, CardComponent, ButtonComponent, RatingComponent, ProductGridComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
