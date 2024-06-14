import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBanner } from '../../../interfaces/tktGePinnedEvents.model';
import { TktgePinnedeventsService } from '../../../services/tktge-pinnedevents.service';
@Component({
  selector: 'app-pinned-events-carousel',
  templateUrl: './pinned-events-carousel.component.html',
  styleUrl: './pinned-events-carousel.component.scss'
})
export class PinnedEventsCarouselComponent {
  
  tktPinnedEvents:IBanner[] = []
  constructor(private _tktPinnedService:TktgePinnedeventsService){
    this._tktPinnedService.getPinnedApi().subscribe((data) => {
      this.tktPinnedEvents = data.data.banners
    })
  }
}
