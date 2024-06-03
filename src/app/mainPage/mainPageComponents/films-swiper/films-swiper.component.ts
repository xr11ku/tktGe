import { Component } from '@angular/core';
import { TktgeMoviesService } from '../../../services/tktge-movies.service';
import { IDatum } from '../../../interfaces/tktGeMovies.model';
@Component({
  selector: 'app-films-swiper',
  templateUrl: './films-swiper.component.html',
  styleUrl: './films-swiper.component.scss'
})
export class FilmsSwiperComponent {

  tktGeMoives:IDatum[] = []

  constructor(private _tktGeMoviesService:TktgeMoviesService){
    this._tktGeMoviesService.getMovies().subscribe((data) => {
      this.tktGeMoives = data.data
    })
  }
}
