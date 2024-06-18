import { Component ,HostListener , ViewChild} from '@angular/core';
import { TktgeMoviesService } from '../../../services/tktge-movies.service';
import { IDatum } from '../../../interfaces/tktGeMovies.model';
@Component({
  selector: 'app-films-swiper',
  templateUrl: './films-swiper.component.html',
  styleUrl: './films-swiper.component.scss'
})
export class FilmsSwiperComponent {

  @ViewChild('swiper') swiper: any;
  slidesPerView: number = 4;

  tktGeMoives:IDatum[] = []

  constructor(private _tktGeMoviesService:TktgeMoviesService){
    this._tktGeMoviesService.getMovies().subscribe((data) => {
      this.tktGeMoives = data.data
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
    if (width >= 1735) {
      this.slidesPerView = 4;
    } else if (width >= 1630) {
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
