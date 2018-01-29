import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  constructor(private router: Router){
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.isOpen = false;
      }

    });
  }
}
