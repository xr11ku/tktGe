import { Component } from '@angular/core';
import { UpComingEventsService } from '../../../services/up-coming-events.service';
import { IDatum } from '../../../interfaces/tktGeUpcomingEvents.model';
@Component({
  selector: 'app-new-events-swiper',
  templateUrl: './new-events-swiper.component.html',
  styleUrl: './new-events-swiper.component.scss'
})
export class NewEventsSwiperComponent {


  tktUpComingEvents:IDatum[] = [] 
  constructor(private _upComingEventsService:UpComingEventsService){
    this._upComingEventsService.getUpComingEvent().subscribe((data) => {
      this.tktUpComingEvents = data.data
    })
  }
}
