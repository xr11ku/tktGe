import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './allComponents/nav-bar/nav-bar.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { AuthComponent } from './allComponents/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { ProfileNavigationComponent } from './profile/profile-navigation/profile-navigation.component';
import { CardsComponent } from './profile/cards/cards.component';
import { LeftSideMenuComponent } from './mainPage/left-side-menu/left-side-menu.component';
import { BlackNavBarComponent } from './allComponents/black-nav-bar/black-nav-bar.component';
import { MainPageComponentsComponent } from './mainPage/mainPageComponents/main-page-components/main-page-components.component';
import { ResponisveNavBarComponent } from './allComponents/responisve-nav-bar/responisve-nav-bar.component';
import { register } from 'swiper/element/bundle';
import { registerLocaleData } from '@angular/common';
import { PinnedEventsCarouselComponent } from './mainPage/mainPageComponents/pinned-events-carousel/pinned-events-carousel.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { PopularEventsSwiperComponent } from './mainPage/mainPageComponents/popular-events-swiper/popular-events-swiper.component';
import { TodayEventsSwiperComponent } from './mainPage/mainPageComponents/today-events-swiper/today-events-swiper.component';
import { NewEventsSwiperComponent } from './mainPage/mainPageComponents/new-events-swiper/new-events-swiper.component';
import { FilmsSwiperComponent } from './mainPage/mainPageComponents/films-swiper/films-swiper.component';
import { EventsPageComponent } from './eventsPage/events-page/events-page.component';
import { EventsLeftSideMenuComponent } from './eventsPage/events-left-side-menu/events-left-side-menu.component';
import { EventsPageComponetsComponent } from './eventsPage/eventsPageComponents/events-page-componets/events-page-componets.component';
import { PopularTwoEventComponent } from './eventsPage/eventsPageComponents/popular-two-event/popular-two-event.component';
import { ConcertSwiperComponent } from './eventsPage/eventsPageComponents/concert-swiper/concert-swiper.component';
import { UpComingEventsComponent } from './eventsPage/eventsPageComponents/up-coming-events/up-coming-events.component';
import { ConcetsPageComponent } from './eventsPage/concets-page/concets-page.component';


registerLocaleData(en);
register();

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AuthComponent,
    ProfilePageComponent,
    SettingsComponent,
    ProfileInfoComponent,
    MainPageComponent,
    ProfileNavigationComponent,
    CardsComponent,
    LeftSideMenuComponent,
    BlackNavBarComponent,
    MainPageComponentsComponent,
    ResponisveNavBarComponent,
    PinnedEventsCarouselComponent,
    PopularEventsSwiperComponent,
    TodayEventsSwiperComponent,
    NewEventsSwiperComponent,
    FilmsSwiperComponent,
    EventsPageComponent,
    EventsLeftSideMenuComponent,
    EventsPageComponetsComponent,
    PopularTwoEventComponent,
    ConcertSwiperComponent,
    UpComingEventsComponent,
    ConcetsPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzCarouselModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
