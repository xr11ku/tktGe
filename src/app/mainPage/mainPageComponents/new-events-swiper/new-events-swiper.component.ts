import { Component ,HostListener , ViewChild} from '@angular/core';
import { UpComingEventsService } from '../../../services/up-coming-events.service';
import { IDatum } from '../../../interfaces/tktGeUpcomingEvents.model';
@Component({
  selector: 'app-new-events-swiper',
  templateUrl: './new-events-swiper.component.html',
  styleUrl: './new-events-swiper.component.scss'
})
export class NewEventsSwiperComponent {
  @ViewChild('swiper') swiper: any;
  slidesPerView: number = 4;

  tktUpComingEvents:IDatum[] = [] 
  
  constructor(private _upComingEventsService:UpComingEventsService){
    this._upComingEventsService.getUpComingEvent().subscribe((data) => {
      this.tktUpComingEvents = data.data
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
