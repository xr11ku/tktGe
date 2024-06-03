import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { IsignIn } from '../../interfaces/signin.model';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  authWindow:boolean = false;
  profileData !: IsignIn;
  userMenu:boolean = false;
  constructor(private _authService:AuthServiceService , public _AuthService:AuthServiceService){
    this._authService.getProfile().subscribe((data) => {
      console.log(data)
      this.profileData = data
    })
  }

  authWindowShow(){
    this.authWindow = true
  }

  logOut(){
    this._authService.logOut()
  }
  
  userMenuShow(){
    this.userMenu =! this.userMenu
  }

}
