import { Component ,HostListener , ViewChild} from '@angular/core';
import { ConcertEventService } from '../../../services/concert-event.service';
import { IShow } from '../../../interfaces/tktGeConcert.model';
@Component({
  selector: 'app-concert-swiper',
  templateUrl: './concert-swiper.component.html',
  styleUrl: './concert-swiper.component.scss'
})
export class ConcertSwiperComponent {
  @ViewChild('swiper') swiper: any;
  slidesPerView: number = 4;

  tktConcerts:IShow[] = []

  constructor(private _concetService:ConcertEventService){
    this._concetService.getConcetApi().subscribe((data) => {
      this.tktConcerts = data.data.shows
      for(let i = 0 ; i < 10 ; i++){
        if(data.data.shows.length > 10){
          this.tktConcerts = data.data.shows.slice(0,10)
        }else{
          this.tktConcerts = data.data.shows
        }
      }
      this.updateSlidesPerView(window.innerWidth);
    })
  }

  ngAfterViewInit() {
    this.updateSlidesPerView(window.innerWidth); // Initial check
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.updateSlidesPerView(target.innerWidth);
  }

  updateSlidesPerView(width: number) {
    if (width >= 1610) {
      this.slidesPerView = 4;
    } else if (width >= 1410) {
      this.slidesPerView = 3;
    } else if (width >= 550) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 1
    }
    if (this.swiper && this.swiper.swiperRef) {
      this.swiper.swiperRef.update(); // Re-initialize Swiper
    }
  }
}
