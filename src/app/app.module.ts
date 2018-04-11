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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BenComponent,
    ServicesComponent,
    NotFoundComponent,
    ContactComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
