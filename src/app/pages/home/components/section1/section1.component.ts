import { Component, OnInit } from '@angular/core';

// SWIPER
import SwiperCore, { SwiperOptions, EffectCards, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styles: [
  ]
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**======================================================================
   * SWIPER
  ===================================================================== */
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    "speed": 650,
    "autoplay": {
      "delay": 6000,
      "disableOnInteraction": false
    },
    navigation: false,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };

}
