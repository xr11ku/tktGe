import { Component } from '@angular/core';
import { TktgePinnedeventsService } from '../../../services/tktge-pinnedevents.service';
import { IBanner } from '../../../interfaces/tktGePinnedEvents.model';
@Component({
  selector: 'app-popular-two-event',
  templateUrl: './popular-two-event.component.html',
  styleUrl: './popular-two-event.component.scss'
})
export class PopularTwoEventComponent {

  pinnedImages: IBanner[] = [];

  constructor(private _tktPinnedImageService: TktgePinnedeventsService) {
    this._tktPinnedImageService.getPinnedApi().subscribe((data) => {
      if (data.data.banners.length >= 2) {
        this.pinnedImages = data.data.banners.slice(0, 2);
      } else {
        this.pinnedImages = data.data.banners;
      }
    });
  }



}
