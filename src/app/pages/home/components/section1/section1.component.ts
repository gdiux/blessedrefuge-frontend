import { Component, OnInit } from '@angular/core';

// SWIPER
import SwiperCore, { SwiperOptions } from 'swiper';

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
    slidesPerView: 2,
    spaceBetween: 50,
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
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  };

}
