import { Injectable } from '@angular/core';
import { IRootMovies } from '../interfaces/tktGeMovies.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TktgeMoviesService {


  tktGeMovieApi:string = 'http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Movies/List'
  constructor(private _http:HttpClient) { }

  getMovies(){
    return this._http.get<IRootMovies>(this.tktGeMovieApi)
  }
}
