import { Component, EventEmitter, Output , OnInit} from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { IsignIn } from '../../interfaces/signin.model';
import { Subscription } from 'rxjs';
import { Router , NavigationEnd } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { IitemSearh } from '../../interfaces/search.model';
import { TopEventsService } from '../../services/top-events.service';
import { IDatum } from '../../interfaces/tktTopEvents.model';
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

  searchActive:boolean = false;

  filmsPageActive:boolean = false;

  eventSearch!:string
  searchedItems!:IitemSearh[]
  searchClear:boolean = false

  popularEvent!:IDatum[]
  
  private routerSubscription!: Subscription;
  constructor(public _authService:AuthServiceService , private route:Router , private _searchService:SearchService, private _popularService:TopEventsService){
    this._authService.getProfile().subscribe((data) => {
      this.userData = data
    })

    this.routerSubscription = this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.filmsPageClickActive();
      }
    });
    this._popularService.getTopEvents().subscribe((popularEvents) => {
      this.popularEvent = popularEvents.data.length >= 4 
        ? popularEvents.data.slice(0, 4) 
        : popularEvents.data;
    })
  }

  @Output() authWindowOpen = new EventEmitter<boolean>()

  search(){
    this._searchService.getSearchItems(this.eventSearch).subscribe((searchedItem) =>{
      this.searchedItems = searchedItem.Data.Items
    })
  }

  searchClearClick(){
    if(this.eventSearch.length >= 1){
      this.eventSearch = ""
      this.searchedItems = []
    }
  }
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

  searchOpen(){
    this.searchActive = true;
  }

  searchClose(){
    this.searchActive = false;
  }
}
