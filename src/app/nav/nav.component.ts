import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Globals } from '../globals';
import { getNavOpen } from '../store/loading.selectors';
import { AppState, setNavOpen, setNavClose } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public isNavOpen$: Observable<boolean>;
  public isNavOpenSubscription: Subscription;
  public isNavOpen: boolean;

  toggleMenu() {
    this.globals.isOpen = !this.globals.isOpen;
    if(this.isNavOpen){
      this.store.dispatch(setNavClose(false));
    } else {
      this.store.dispatch(setNavOpen(true));
    }
  }

  constructor(
    private router: Router,
    private globals: Globals,
    protected store: Store<AppState>) {

    this.isNavOpen$ = this.store.select(getNavOpen);
    this.isNavOpenSubscription = this.isNavOpen$.subscribe(boolean => {
      this.isNavOpen = boolean;
      console.log(this.isNavOpen)
    });

    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.globals.isOpen = false;
      }

    });
  }
}
