import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES IMPORT
import { SwiperModule } from 'swiper/angular';

// MY MODULES
import { PagesModule } from './pages/pages.module';
import { DivisionsModule } from './divisions/divisions.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    PagesModule,
    DivisionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
