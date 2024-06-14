import { Component, EventEmitter, Output } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthServiceService } from '../../services/auth-service.service';
import { IsignIn } from '../../interfaces/signin.model';
import { Subscription } from 'rxjs';
import { Route, Router , NavigationEnd } from '@angular/router';
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

  filmsPageActive:boolean = false;
  private routerSubscription!: Subscription;
  constructor(public _authService:AuthServiceService , private route:Router ){
    this._authService.getProfile().subscribe((data) => {
      this.userData = data
    })

    this.routerSubscription = this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.filmsPageClickActive();
      }
    });
  }

  @Output() authWindowOpen = new EventEmitter<boolean>()

  authWindowOpens(Open:boolean){
    this.authWindowOpen.emit(Open)
  }
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

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  filmsPageClickActive() {
    this.filmsPageActive = this.route.url === '/moviePage';
  }

  logOut(){
    this._authService.logOut()
  }
}
