import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-left-side-menu',
  templateUrl: './movie-left-side-menu.component.html',
  styleUrl: './movie-left-side-menu.component.scss'
})
export class MovieLeftSideMenuComponent {
  allCinema:boolean = true;
  cinemaAmiran:boolean = false;
  caveaTbilisiMall:boolean = false;
  caveaEastPoint:boolean = false;
  caveaGallery:boolean = false;
  caveaCityMall:boolean = false;
  apoloBatuimi:boolean = false;

  allCinemaShow(){
    this.allCinema = true;
    this.cinemaAmiran = false;
    this.caveaTbilisiMall = false;
    this.caveaEastPoint = false;
    this.caveaGallery = false;
    this.caveaCityMall = false;
    this.apoloBatuimi = false;
  }

  cinemaAmiranShow(){
    this.allCinema = false;
    this.cinemaAmiran = true;
    this.caveaTbilisiMall = false;
    this.caveaEastPoint = false;
    this.caveaGallery = false;
    this.caveaCityMall = false;
    this.apoloBatuimi = false;
  }

  caveaTbilisMallShow(){
    this.allCinema = false;
    this.cinemaAmiran = false;
    this.caveaTbilisiMall = true;
    this.caveaEastPoint = false;
    this.caveaGallery = false;
    this.caveaCityMall = false;
    this.apoloBatuimi = false;
  }

  caveaEastPointShow(){
    this.allCinema = false;
    this.cinemaAmiran = false;
    this.caveaTbilisiMall = false;
    this.caveaEastPoint = true;
    this.caveaGallery = false;
    this.caveaCityMall = false;
    this.apoloBatuimi = false;
  }

  caveaGalleryShow(){
    this.allCinema = false;
    this.cinemaAmiran = false;
    this.caveaTbilisiMall = false;
    this.caveaEastPoint = false;
    this.caveaGallery = true;
    this.caveaCityMall = false;
    this.apoloBatuimi = false;
  }

  caveaCityMallShow(){
    this.allCinema = false;
    this.cinemaAmiran = false;
    this.caveaTbilisiMall = false;
    this.caveaEastPoint = false;
    this.caveaGallery = false;
    this.caveaCityMall = true;
    this.apoloBatuimi = false;
  }

  apoloBatumiShow(){
    this.allCinema = false;
    this.cinemaAmiran = false;
    this.caveaTbilisiMall = false;
    this.caveaEastPoint = false;
    this.caveaGallery = false;
    this.caveaCityMall = false;
    this.apoloBatuimi = true;
  }
}
