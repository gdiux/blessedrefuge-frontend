import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

// COMPONENTS
import { AirComponent } from './air/air.component';
import { MedicalComponent } from './medical/medical.component';
import { TechnologyComponent } from './technology/technology.component';



@NgModule({
  declarations: [
    AirComponent,
    MedicalComponent,
    TechnologyComponent
  ],
  exports: [
    AirComponent,
    MedicalComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class DivisionsModule { }
