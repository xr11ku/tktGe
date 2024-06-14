import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthServiceService } from '../../services/auth-service.service';
import { IsignIn } from '../../interfaces/signin.model';
@Component({
  selector: 'app-responisve-nav-bar',
  templateUrl: './responisve-nav-bar.component.html',
  styleUrl: './responisve-nav-bar.component.scss'
})
export class ResponisveNavBarComponent {

  respMenu:boolean = false;
  eventMenu:boolean = true;
  userData !:IsignIn
  userMenu:boolean = false
  authWindow:boolean = false
  respMenuShow(){
    this.respMenu = true
  }
  respMenuClose(){
    this.respMenu = false
  }

  eventMenuShow(){
    this.eventMenu =! this.eventMenu
  }

  userMenuShow(){
    this.userMenu =! this.userMenu
  }
  constructor(public _authService:AuthServiceService ){
    this._authService.getProfile().subscribe((data) => {
      this.userData = data
    })
  }
  
}
