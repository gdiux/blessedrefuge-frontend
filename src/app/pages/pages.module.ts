import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';
import { NgxPayPalModule } from 'ngx-paypal';

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './home/components/intro/intro.component';
import { Section1Component } from './home/components/section1/section1.component';
import { Section2Component } from './home/components/section2/section2.component';
import { CallActionComponent } from './home/components/call-action/call-action.component';
import { TestimonialsComponent } from './home/components/testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DonateComponent } from './donate/donate.component';

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
    DonateComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    NgxPayPalModule
  ]
})
export class PagesModule { }
