import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

// ngrx
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { getNavOpen } from '../store/loading.selectors';

// our store code
import { AppState, setNavOpen, setNavClose } from '../store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit{
  public isNavOpen$: Observable<boolean>;

  toggleMenu() {
    this.store.dispatch(setNavOpen(true));
  }

  constructor(
    private router: Router,
    protected store: Store<AppState>) {
  }

  ngOnInit(){
    this.isNavOpen$ = this.store.select(getNavOpen);
  }

}
