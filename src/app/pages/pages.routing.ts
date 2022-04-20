import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent, data:{ titulo: 'About'} },  
    { path: 'donate', component: DonateComponent, data:{ titulo: 'Donate'} },  
    { path: 'contacts', component: ContactsComponent, data:{ titulo: 'Contacts'} },  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}