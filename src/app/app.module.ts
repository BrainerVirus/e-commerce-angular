import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/header/navbar/navbar.component';

import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
