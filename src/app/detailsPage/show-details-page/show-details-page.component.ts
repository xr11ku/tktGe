import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRootDetails , Data ,Event , Poster, Price, Venue} from '../../interfaces/detailsPage.model';
import { DetailsPageService } from '../../services/details-page.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-show-details-page',
  templateUrl: './show-details-page.component.html',
  styleUrl: './show-details-page.component.scss'
})
export class ShowDetailsPageComponent {
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
    _detailsService.getShowDetails(this.id).subscribe((show) => {
      this.details = show.data
      show.data.posters.find((poster) => {
        this.poster = poster.fileName
      })
      show.data.events.find((event) =>{
        this.event = event
      })
      show.data.events.find((price) => {
        this.price = price.minPrice
      })
      show.data.events.find((venue) => {
        this.addres = venue.venue
      })
    })
  }
}
