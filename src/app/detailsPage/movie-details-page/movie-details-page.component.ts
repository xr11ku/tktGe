import { Component } from '@angular/core';
import { DetailsPageService } from '../../services/details-page.service';
import { Data , Event} from '../../interfaces/moviesDetails.model';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss'
})
export class MovieDetailsPageComponent {
  details!:Event[]
  id !: number
  constructor(private route:ActivatedRoute , private _detailsService:DetailsPageService){
    route.params.subscribe((params) => {
      this.id = params['id']
    })
    _detailsService.getMovieDetails(this.id).subscribe((movieDetails) => {
      this.details = movieDetails.Data.Events
    })
  }
}
