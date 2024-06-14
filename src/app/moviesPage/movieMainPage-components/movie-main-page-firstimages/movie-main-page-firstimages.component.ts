import { Component } from '@angular/core';
import { MovieMainPageService } from '../../../services/movie-main-page.service';
import { IMovie ,IPoster } from '../../../interfaces/movieMainPage.model';
@Component({
  selector: 'app-movie-main-page-firstimages',
  templateUrl: './movie-main-page-firstimages.component.html',
  styleUrl: './movie-main-page-firstimages.component.scss'
})
export class MovieMainPageFirstimagesComponent {

  twoImage!:IMovie[]

  constructor(private _moviePageServices:MovieMainPageService){
   _moviePageServices.getTwoImage().subscribe((twoImage) => {
    this.twoImage = twoImage.Data.Movies
   })
  }
}
