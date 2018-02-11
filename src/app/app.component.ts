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
    private globals: Globals) { }

  createRandomColor(): string {
    function newNumber(): number {
      return Math.floor(Math.random() * 256);
    }

    function opacity(): number {
      return Math.floor(Math.random() * 10);
    }

    return `rgba(${newNumber()}, ${newNumber()}, ${newNumber()}, 0.${opacity()})`;
  }

  setNavState(event): void {
    let e = event;
    if (e instanceof NavigationStart) {
      console.log('NavigationStart');
      // Show loading indicator
      this.globals.hasLoaded = false;
      this.globals.isFetching = true;
    }

    if (e instanceof NavigationEnd) {
      // Hide loading indicator
      console.log('NavigationEnd');
      this.globals.hasLoaded = true;
      this.globals.isFetching = false;
    }

    if (e instanceof NavigationError) {
      // Hide loading indicator
      // Present error to user
      console.log(e.error);
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.globals.randomColor = this.createRandomColor();
      this.setNavState(event);
    });
  }

}
