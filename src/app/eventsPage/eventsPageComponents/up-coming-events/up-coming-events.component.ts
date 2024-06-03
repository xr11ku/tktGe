import { Component } from '@angular/core';
import { UpComingEventsService } from '../../../services/up-coming-events.service';
import { IDatum } from '../../../interfaces/tktGeUpcomingEvents.model';
@Component({
  selector: 'app-up-coming-events',
  templateUrl: './up-coming-events.component.html',
  styleUrl: './up-coming-events.component.scss'
})
export class UpComingEventsComponent {

  tktComingEvents:IDatum[] = []

  constructor(private _upComingEventsService:UpComingEventsService){
    this._upComingEventsService.getUpComingEvent().subscribe((data) => {
      this.tktComingEvents = data.data
      for(let i = 0 ; i < 2 ; i++){
        if(data.data.length > 2){
          this.tktComingEvents = data.data.slice(0,2)
        }else{
          this.tktComingEvents = data.data
        }
      }
    })
  }
}
