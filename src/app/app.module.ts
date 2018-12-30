import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { RoutingModule } from './routing/routing.module';

// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BenComponent, ServicesComponent, NotFoundComponent, ContactComponent, PageComponent} from './pages';

// ngrx
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

// redux dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// pwa
import { ServiceWorkerModule } from '@angular/service-worker';
import { IconHamComponent } from './icon-ham/icon-ham.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BenComponent,
    ServicesComponent,
    NotFoundComponent,
    ContactComponent,
    PageComponent,
    IconHamComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
