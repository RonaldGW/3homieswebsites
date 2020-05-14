import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PriceingComponent } from './priceing/priceing.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PriceingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
