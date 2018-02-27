import { Component, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Globals } from './globals';
import { Store } from '@ngrx/store';
import { setNavEnd, setNavStart, setNavError } from './store';

interface AppState {
  nav: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Cortes Labs';

  constructor(
    private store: Store<AppState>,
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

  setNavState(e): void {
    if (e instanceof NavigationStart) {
      // Show loading indicator
      this.globals.hasLoaded = false;
      this.globals.isFetching = true;
      this.store.dispatch(setNavStart(true));
    }

    if (e instanceof NavigationEnd) {
      // Hide loading indicator
      this.globals.hasLoaded = true;
      this.globals.isFetching = false;
      // this.store.dispatch(setNavEnd(true));
    }

    if (e instanceof NavigationError) {
      // Hide loading indicator
      // Present error to user
      console.log(e.error);
      this.store.dispatch(setNavError(true));
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.globals.randomColor = this.createRandomColor();
      this.setNavState(event);
    });
  }

}
