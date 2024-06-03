import { Injectable } from '@angular/core';
import { IRootTktToday } from '../interfaces/tktGeTodayEvents.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodayEventsService {


  tktTodayEventsApi:string = 'http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Events/Today'
  constructor(private _http:HttpClient) { }

  getTodayEvents(){
    return this._http.get<IRootTktToday>(this.tktTodayEventsApi)
  }

}
