import { Component } from '@angular/core';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss'
})
export class ProfileNavigationComponent {

  constructor(public _profilePage:ProfilePageComponent){}

  infoShow(){
    this._profilePage.info = true
    this._profilePage.cards = false
    this._profilePage.settings = false
  }

  cardsShow(){
    this._profilePage.info = false
    this._profilePage.cards = true
    this._profilePage.settings = false
  }

  settingsShow(){
    this._profilePage.info = false
    this._profilePage.cards = false
    this._profilePage.settings = true
  }
}
