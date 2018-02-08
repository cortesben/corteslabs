import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BenComponent, ServicesComponent, NotFoundComponent, ContactComponent } from './../pages';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ben',
    pathMatch: 'full'
  },
  {
    path: 'ben',
    component: BenComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
