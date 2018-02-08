import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { RoutingModule } from './routing/routing.module';

import { NavComponent } from './nav/nav.component';
import { BenComponent, ServicesComponent, NotFoundComponent, ContactComponent } from './pages';

import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BenComponent,
    ServicesComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [Globals, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
