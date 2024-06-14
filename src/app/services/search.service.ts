import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRootSearch } from '../interfaces/search.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http:HttpClient) { }

  getSearchItems(search:string){
    const searchApi = `http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/v2/shows/search?keyword=${search}&api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be777`
    return this._http.get<IRootSearch>(searchApi)
  }
}
