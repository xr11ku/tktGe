import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRootDetails , Data ,Event , Poster, Price, Venue} from '../../interfaces/detailsPage.model';
import { DetailsPageService } from '../../services/details-page.service';
import { __param } from 'tslib';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent {

  details!:Data
  poster:string = ''
  price!:Price
  event!:Event
  addres!:Venue
  id !: number
  
  constructor(private route:ActivatedRoute , private _detailsService:DetailsPageService){
    route.params.subscribe((params) => {
      this.id = params['id']
    })
    _detailsService.getDetails(this.id).subscribe((details) => {
      this.details = details.data
      details.data.posters.find((poster) => {
         this.poster = poster.fileName
       })
      details.data.events.find((event) => {
        this.event = event
      })
      details.data.events.find((price) => {
        this.price = price.minPrice
      })
      details.data.events.find((venue) => {
        this.addres = venue.venue
      })
    })
  }
}
