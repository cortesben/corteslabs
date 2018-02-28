import { Component, OnInit, Input } from '@angular/core';
import { Globals } from './../globals';
import { getNavStart, getNavEnd } from '../store/loading.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PageComponent implements OnInit {
  public title: string;
  public body: string[];
  public routeLoaded: boolean;
  public isNavEnd$: Observable<boolean>;
  public isNavEndSubscription: Subscription;

  constructor(public globals: Globals, protected store: Store<AppState>) {
    this.isNavEnd$ = this.store.select(getNavEnd);
  }


  ngOnInit() {
    this.isNavEndSubscription = this.isNavEnd$.subscribe(boolean => {
      this.routeLoaded = boolean;
    });
  }

  ngOnDestroy() {
    this.isNavEndSubscription.unsubscribe();
  }

}
