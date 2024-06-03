import { Component } from '@angular/core';
import { ConcertEventService } from '../../../services/concert-event.service';
import { IShow } from '../../../interfaces/tktGeConcert.model';
@Component({
  selector: 'app-concert-swiper',
  templateUrl: './concert-swiper.component.html',
  styleUrl: './concert-swiper.component.scss'
})
export class ConcertSwiperComponent {

  tktConcerts:IShow[] = []

  constructor(private _concetService:ConcertEventService){
    this._concetService.getConcetApi().subscribe((data) => {
      this.tktConcerts = data.data.shows
      for(let i = 0 ; i < 10 ; i++){
        if(data.data.shows.length > 10){
          this.tktConcerts = data.data.shows.slice(0,10)
        }else{
          this.tktConcerts = data.data.shows
        }
      }
    })
  }
}
