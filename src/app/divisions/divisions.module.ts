import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

// COMPONENTS
import { AirComponent } from './air/air.component';
import { MedicalComponent } from './medical/medical.component';
import { TechnologyComponent } from './technology/technology.component';
import { FarmingComponent } from './farming/farming.component';
import { SpiritualComponent } from './spiritual/spiritual.component';



@NgModule({
  declarations: [
    AirComponent,
    MedicalComponent,
    TechnologyComponent,
    FarmingComponent,
    SpiritualComponent
  ],
  exports: [
    AirComponent,
    MedicalComponent,
    TechnologyComponent,
    FarmingComponent,
    SpiritualComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class DivisionsModule { }
