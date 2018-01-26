import { Routes, RouterModule } from '@angular/router';
import { BenComponent } from './ben/ben.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo:  'ben', pathMatch: 'full' },
    { path: 'ben', component:  BenComponent },
    { path: 'services', component:  ServicesComponent },
    { path: '**', component: NotFoundComponent }
];

export const Routing = RouterModule.forRoot(routes, {useHash: false});