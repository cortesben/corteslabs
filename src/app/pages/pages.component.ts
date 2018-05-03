import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { getNavStart, getNavEnd, getNavOpen } from '../store/loading.selectors';
import { Store } from '@ngrx/store';
import { AppState, setNavClose, setNavOpen } from '../store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {
  public title: string;
  public body: string[];
  public routeLoaded: boolean;

  public isNavEndSubscription: Subscription;
  public isNavOpen$: Observable<boolean>;

  constructor(protected store: Store<AppState>) { }

  closeNav() {
    this.store.dispatch(setNavClose(false));
  }

  ngOnInit() {

    this.isNavOpen$ = this.store.select(getNavOpen);

    this.isNavEndSubscription = this.store.select(getNavEnd).subscribe(boolean => {
      this.routeLoaded = boolean;
      console.log('this.routeLoaded',this.routeLoaded);
      this.store.dispatch(setNavClose(false));
    });
  }

  ngOnDestroy() {
    this.isNavEndSubscription.unsubscribe();
  }

}
