import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AirComponent } from './air/air.component';
import { MedicalComponent } from './medical/medical.component';

const routes: Routes = [
    { path: 'divisions/air', component: AirComponent, data:{ titulo: 'Air Division'} },
    { path: 'divisions/medical', component: MedicalComponent, data:{ titulo: 'Medical Division'} },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DivisionsRoutingModule {}