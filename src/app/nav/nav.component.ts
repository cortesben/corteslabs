import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  toggleMenu() {
    this.globals.isOpen = !this.globals.isOpen;
  }

  constructor(
    private router: Router,
    private globals: Globals){

    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.globals.isOpen = false;
      }

    });
  }
}
