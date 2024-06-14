import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { TopEventsService } from '../../services/top-events.service';
import { SearchService } from '../../services/search.service';
import { IDatum , IRootTktTop } from '../../interfaces/tktTopEvents.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IsignIn } from '../../interfaces/signin.model';
import { IDataSearch , IitemSearh} from '../../interfaces/search.model';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  authWindow:boolean = false;
  profileData !: IsignIn;
  userMenu:boolean = false;

  popularEvents!:IDatum[]

  eventSearch!:string
  searchResults: IitemSearh[] = [];

  constructor(private _authService:AuthServiceService , public _AuthService:AuthServiceService , private _popularService:TopEventsService , private _searchService:SearchService ){
    this._authService.getProfile().subscribe((data) => {
      this.profileData = data
    })

    this._popularService.getTopEvents().subscribe((popularEvents: IRootTktTop) => {
      this.popularEvents = popularEvents.data.length >= 4 
        ? popularEvents.data.slice(0, 4) 
        : popularEvents.data;
    })

    this._searchService.getSearchItems(this.eventSearch).subscribe((searchedItem) => {
      this.searchResults = searchedItem.Data.Items;
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
