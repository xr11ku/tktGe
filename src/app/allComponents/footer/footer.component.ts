import { Component } from '@angular/core';
import { Router , NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  navigation:boolean = false;
  suppoort:boolean = false;
  events:boolean = false;
  movie:boolean = false;
  train:boolean = false;
  flyght:boolean = false;

  filmsPageActive:boolean = false;
  private routerSubscription!: Subscription;

  constructor(private route:Router){
    this.routerSubscription = this.route.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.filmsPage_Active()
      }
    })
  }
  navigationOpen(){
    this.navigation =! this.navigation 
  }

  supportOpen(){
    this.suppoort =! this.suppoort 
  }

  eventsOpen(){
    this.events =! this.events
  }

  movieOpen(){
    this.movie =! this.movie
  }

  trainOpen(){
    this.train =! this.train
  }

  flyghtOpen(){
    this.flyght =! this.flyght
  }

  filmsPage_Active(){
    this.filmsPageActive = this.route.url === '/moviePage';
  }
}
