import { Component } from '@angular/core';

@Component({
  selector: 'app-events-left-side-menu',
  templateUrl: './events-left-side-menu.component.html',
  styleUrl: './events-left-side-menu.component.scss'
})
export class EventsLeftSideMenuComponent {

  event:boolean = true
  concerts:boolean = false

  eventShow(){
    this.event = true
    this.concerts = false
  }

  concerShow(){
    this.event = false
    this.concerts = true
  }
}
