import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PriceingComponent } from './priceing/priceing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PriceingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private route: ActivatedRoute,
  ) {}
 }
