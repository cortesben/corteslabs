import { Component, OnInit, Input } from '@angular/core';
import { Globals } from './../globals';
import { getNavStart } from '../store/loading.selectors';
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
  public transitionStart: boolean;
  public isNavStart$: Observable<boolean>;
  public isNavStartSubscription: Subscription;

  constructor(public globals: Globals, protected store: Store<AppState>) { 
    this.isNavStart$ = this.store.select(getNavStart);
  }

  toggleNav() {
    this.globals.isOpen = !this.globals.isOpen;
  }

  ngOnInit() {
    this.isNavStartSubscription = this.isNavStart$.subscribe( boolean => {
      this.transitionStart = boolean;
      console.log(boolean);
    });

    console.log(this.transitionStart);
    // TODO: investigate why we need to push this back to the end of event loop and cannot just set it on Init
    // setTimeout(() => {
    //   this.transitionStart = this.globals.hasLoaded;
    // }, 0);
  }

  ngOnDestroy() {
    this.isNavStartSubscription.unsubscribe();
  }

}
