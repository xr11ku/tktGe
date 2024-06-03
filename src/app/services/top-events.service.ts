import { Injectable } from '@angular/core';
import { IRootTktTop } from '../interfaces/tktTopEvents.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TopEventsService {

  tktGeTopEventsApi:string = 'http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Events/Top'
  constructor(private _http:HttpClient) { }

  getTopEvents(){
    return this._http.get<IRootTktTop>(this.tktGeTopEventsApi)
  }
}
