import { Component , OnInit} from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  
  email!: string
  password!: string


  constructor(private navBar:NavBarComponent , private _AuthService:AuthServiceService){
  }

  authWindowClose(){
    this.navBar.authWindow = false
  }

  loginAction(){
    this._AuthService.loginIn(this.email,this.password).subscribe((data) => {
      localStorage.setItem("token",data.access_token);
      this.authWindowClosIsAuthTrue()
    })
  }

  authWindowClosIsAuthTrue() {
    if(this._AuthService.isAuthorized()){
      this.navBar.authWindow = false
    }
  }

}
