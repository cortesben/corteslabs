import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Routing } from './app.routing';

import { NavComponent } from './nav/nav.component';
import { BenComponent } from './ben/ben.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

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
    Routing
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
