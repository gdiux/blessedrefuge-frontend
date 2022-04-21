import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ROUTES
import { PagesRoutingModule } from './pages/pages.routing';

// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DivisionsRoutingModule } from './divisions/divisions.routing';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { titulo: 'Home' } },
  { path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
  { path: '**', component: NopagefoundComponent, data: { titulo: 'Not Page Found' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    DivisionsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
