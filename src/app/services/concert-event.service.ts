import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRootConcerts } from '../interfaces/tktGeConcert.model';
@Injectable({
  providedIn: 'root'
})
export class ConcertEventService {

  tktConcetsApi:string = 'http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Shows/List?categoryId=2'
  constructor(private _http:HttpClient) { }

  getConcetApi(){
    return this._http.get<IRootConcerts>(this.tktConcetsApi)
  }
}
