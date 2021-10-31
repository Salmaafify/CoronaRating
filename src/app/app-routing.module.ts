import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDetailsComponent } from './Components/countries-details/countries-details.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'countries', component: CountriesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
