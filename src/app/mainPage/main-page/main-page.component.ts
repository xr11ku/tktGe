import { Component } from '@angular/core';
import { TktgePinnedeventsService } from '../../services/tktge-pinnedevents.service';
import { IBanner } from '../../interfaces/tktGePinnedEvents.model';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  pinnedEvents:IBanner[] = []

  constructor(private _pinnedService:TktgePinnedeventsService){
    this._pinnedService.getPinnedApi().subscribe((data) => {
      console.log(data.data)
    })
  }
}
