import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tktGE';

  authWindowShow:boolean = false

  authWindowOpen(Open:boolean){
    this.authWindowShow = Open
  }

  authWindowClose(){
    this.authWindowShow = false
  }
}
