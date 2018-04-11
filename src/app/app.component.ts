import { Component, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
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
    private router: Router) { }

  setNavState(e): void {
    if (e instanceof NavigationStart) {
      // Show loading indicator
      this.store.dispatch(setNavStart(true));
    }

    if (e instanceof NavigationEnd) {}

    if (e instanceof NavigationError) {
      // Hide loading indicator
      // Present error to user
      console.log(e.error);
      this.store.dispatch(setNavError(true));
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.setNavState(event);
    });
  }

}
