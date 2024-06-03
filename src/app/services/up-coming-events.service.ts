import { Injectable } from '@angular/core';
import { IRootUpComingEvent } from '../interfaces/tktGeUpcomingEvents.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpComingEventsService {

  tktUpComingEventsApi:string = 'http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Events/Upcoming'
  constructor(private _http:HttpClient) { }

  getUpComingEvent(){
    return this._http.get<IRootUpComingEvent>(this.tktUpComingEventsApi)
  }
}
