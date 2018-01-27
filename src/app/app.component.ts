import { Component, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Globals } from './globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Cortes Labs';

  constructor(
    private router: Router,
    private globals: Globals) {

    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.globals.loaded = false;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log('NavigationEnd');
        this.globals.loaded = true;
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }

}
