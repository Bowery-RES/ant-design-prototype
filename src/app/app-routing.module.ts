import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteDescriptionComponent } from './site-description/site-description.component';
import {PropertySummaryComponent} from './property-summary/property-summary.component'
const routes: Routes = [
  {path: 'site-description', component: SiteDescriptionComponent},
  {path: 'summary', component: PropertySummaryComponent},
  {path: '', redirectTo: '/site-description'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
