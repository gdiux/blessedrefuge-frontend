import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './home/components/intro/intro.component';
import { Section1Component } from './home/components/section1/section1.component';
import { Section2Component } from './home/components/section2/section2.component';
import { CallActionComponent } from './home/components/call-action/call-action.component';
import { TestimonialsComponent } from './home/components/testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    IntroComponent,
    Section1Component,
    Section2Component,
    CallActionComponent,
    TestimonialsComponent,
    ContactsComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class PagesModule { }
