import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/header/navbar/navbar.component';

import { HomePageModule } from './pages/home-page/home-page.module';
import { IconsModule } from './icons/icons.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageModule, IconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
