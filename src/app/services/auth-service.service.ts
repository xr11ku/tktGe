import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { APIBuilder } from '../../apiBuilder';
import { IsignIn } from '../interfaces/signin.model';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  

  constructor(public _http:HttpClient ){}

  loginIn(email:string , password:string){
    return this._http.post<any>(APIBuilder.getEntpoint('auth/login'),{
      email:email,
      password:password
    })
  }

  logOut(){
    localStorage.clear()
  }

  getProfile(){
    let token = localStorage.getItem("token")

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })

    return this._http.get<IsignIn>(APIBuilder.getEntpoint('auth/profile'),{
      headers:headers
    })
  }

  isAuthorized(){
    let token = localStorage.getItem('token');

    if(token){
      return true
    }else{
      return false
    }
  }


}
