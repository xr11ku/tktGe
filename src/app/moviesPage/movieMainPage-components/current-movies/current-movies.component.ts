import { Component } from '@angular/core';
import { MovieMainPageService } from '../../../services/movie-main-page.service';
import { Movie , Poster} from '../../../interfaces/movieMainPage.model';
@Component({
  selector: 'app-current-movies',
  templateUrl: './current-movies.component.html',
  styleUrl: './current-movies.component.scss'
})
export class CurrentMoviesComponent {

  currentMovies!:Movie[]
  currentMoviesPosters!:Poster

  constructor(private _moviesService:MovieMainPageService){
    _moviesService.getCurrentMovies().subscribe((currentMovies) => {
      this.currentMovies = currentMovies.Data.Movies
      currentMovies.Data.Movies.find((movie) => {
        movie.Posters.find((poster) => {
          if(poster.PosterType === "Horizontal"){
            this.currentMoviesPosters = poster
          }
        })
      })
    })
  }
}
