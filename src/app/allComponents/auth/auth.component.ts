import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  
  email!: string
  password!: string

  @Output() authWindow = new EventEmitter<boolean>();
  @Output() respAuthWindow = new EventEmitter<boolean>();

  constructor(private _AuthService:AuthServiceService){
  }

  authWindowClose(Close:boolean){
    this.authWindow.emit(Close)
    this.respAuthWindow.emit(Close)
  }
  loginAction(){
    this._AuthService.loginIn(this.email,this.password).subscribe((data) => {
      localStorage.setItem("token",data.access_token);
      this.authWindowClosIsAuthTrue()
    })
  }

  authWindowClosIsAuthTrue() {
    if(this._AuthService.isAuthorized()){
      this.authWindowClose(false)
    }
  }

}
