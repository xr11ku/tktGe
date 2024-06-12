import { Component } from '@angular/core';
import { ConcertEventService } from '../../../services/concert-event.service';
import { IShow } from '../../../interfaces/tktGeConcert.model';
@Component({
  selector: 'app-concert-page-cards',
  templateUrl: './concert-page-cards.component.html',
  styleUrl: './concert-page-cards.component.scss'
})
export class ConcertPageCardsComponent {

  tktConcerts!:IShow[]
  constructor(private _concertsService:ConcertEventService){
    _concertsService.getConcetApi().subscribe((concerts) => {
      this.tktConcerts = concerts.data.shows
    })
  }
}
