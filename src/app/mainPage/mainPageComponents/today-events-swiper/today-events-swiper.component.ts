import { Component ,HostListener , ViewChild} from '@angular/core';
import { TodayEventsService } from '../../../services/today-events.service';
import { IDatum } from '../../../interfaces/tktGeTodayEvents.model';
@Component({
  selector: 'app-today-events-swiper',
  templateUrl: './today-events-swiper.component.html',
  styleUrl: './today-events-swiper.component.scss'
})
export class TodayEventsSwiperComponent {
  @ViewChild('swiper') swiper: any;
  slidesPerView: number = 4;

  tktTodaEvents:IDatum[] =[]

  constructor(private _todayEventsService:TodayEventsService){
    this._todayEventsService.getTodayEvents().subscribe((data) =>{
      this.tktTodaEvents = data.data
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
