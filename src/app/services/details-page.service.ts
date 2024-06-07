import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRootDetails , Data ,Event} from '../interfaces/detailsPage.model';
import { IRootMovieDetails } from '../interfaces/moviesDetails.model';
@Injectable({
  providedIn: 'root'
})
export class DetailsPageService {

  constructor(private _http:HttpClient) { }

  getDetails(id:number){
    const _detailsUrl = `http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/v2/shows/get?itemId=${id}&category=Event&previewKey=&queueItTkn=&urlWithoutQueueITTkn=https%3A%2F%2Ftkt.ge%2FEvent%2F414897&api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77`

    return this._http.get<IRootDetails>(_detailsUrl)
  }

  getShowDetails(id:number){
    const _showDetailsUrl = `http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/v2/shows/get?itemId=${id}&category=Show&previewKey=&queueItTkn=&urlWithoutQueueITTkn=https%3A%2F%2Ftkt.ge%2FShow%2F19607&api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77`
    
    return this._http.get<IRootDetails>(_showDetailsUrl)
  }

  getMovieDetails(id:number){
    const _movieDetailsApi = `http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/v2/shows/get?itemId=${id}&category=Show&previewKey=&queueItTkn=&urlWithoutQueueITTkn=https%3A%2F%2Ftkt.ge%2FShow%2F19628&api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77`

    return this._http.get<IRootMovieDetails>(_movieDetailsApi)
  }
}
