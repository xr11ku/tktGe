import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { EventsPageComponent } from './eventsPage/events-page/events-page.component';
const routes: Routes = [
  {
    path:"",
    component:MainPageComponent
  },
  {
    path:"profile",
    component:ProfilePageComponent
  },
  {
    path:"events",
    component:EventsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
