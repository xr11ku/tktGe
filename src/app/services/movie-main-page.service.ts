import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRootMovieMainPageTwoPhoto , IRootCurrentMovieMainPage} from '../interfaces/movieMainPage.model';
@Injectable({
  providedIn: 'root'
})
export class MovieMainPageService {

  constructor(private _http:HttpClient) { }

  twoImageApi:string = "http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/v2/movies/popular?api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77"
  currentMoviesApi:string = "http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/v2/movies/list?api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77"
  
  getTwoImage(){
     return this._http.get<IRootMovieMainPageTwoPhoto>(this.twoImageApi)
  }

  getCurrentMovies(){
    return this._http.get<IRootCurrentMovieMainPage>(this.currentMoviesApi)
  }
}
