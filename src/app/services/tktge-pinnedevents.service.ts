import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRootTktPinned } from '../interfaces/tktGePinnedEvents.model';
@Injectable({
  providedIn: 'root'
})
export class TktgePinnedeventsService {

  tktGePinnedEventsApi:string = 'http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Shows/Pinned'
  constructor(private _http:HttpClient) {}

  getPinnedApi(){
    return this._http.get<IRootTktPinned>(this.tktGePinnedEventsApi)
  }

}
