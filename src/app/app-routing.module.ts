import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { EventsPageComponent } from './eventsPage/events-page/events-page.component';
import { DetailsPageComponent } from './detailsPage/details-page/details-page.component';
import { ShowDetailsPageComponent } from './detailsPage/show-details-page/show-details-page.component';
import { MovieDetailsPageComponent } from './detailsPage/movie-details-page/movie-details-page.component';
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
  },
  {
    path:"details/:id",
    component:DetailsPageComponent
  },
  {
    path:"showDetails/:id",
    component:ShowDetailsPageComponent
  },
  {
    path:"movieDetails/:id",
    component:MovieDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
