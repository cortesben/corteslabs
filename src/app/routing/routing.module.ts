import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BenComponent, ServicesComponent, NotFoundComponent, ContactComponent } from './../pages';

import { RouteResolver } from './route.resolver';

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
    component: ServicesComponent,
    resolve: { message: RouteResolver }
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
  providers: [RouteResolver]
})
export class RoutingModule { }
