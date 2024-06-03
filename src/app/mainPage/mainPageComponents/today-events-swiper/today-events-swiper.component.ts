import { Component } from '@angular/core';
import { TodayEventsService } from '../../../services/today-events.service';
import { IDatum } from '../../../interfaces/tktGeTodayEvents.model';
@Component({
  selector: 'app-today-events-swiper',
  templateUrl: './today-events-swiper.component.html',
  styleUrl: './today-events-swiper.component.scss'
})
export class TodayEventsSwiperComponent {

  tktTodaEvents:IDatum[] =[]

  constructor(private _todayEventsService:TodayEventsService){
    this._todayEventsService.getTodayEvents().subscribe((data) =>{
      this.tktTodaEvents = data.data
    })
  }
}
