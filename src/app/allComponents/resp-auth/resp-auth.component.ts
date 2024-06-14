import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-resp-auth',
  templateUrl: './resp-auth.component.html',
  styleUrl: './resp-auth.component.scss'
})
export class RespAuthComponent {
  email!: string
  password!: string


  constructor(private _AuthService:AuthServiceService){
  }

  loginAction(){
    this._AuthService.loginIn(this.email,this.password).subscribe((data) => {
      localStorage.setItem("token",data.access_token);
    })
  }
}
