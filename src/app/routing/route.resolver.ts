import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { setNavEnd, AppState } from '../store';
import { Store } from '@ngrx/store';

@Injectable()
export class RouteResolver implements Resolve<Observable<any>>{

  constructor(private store: Store<AppState>) { }

  resolve(): Observable<any> {
    /** we dispatch the navigation end action with a delay of 300ms so our observable to resolve this route completes
     * the use of this is so the animation in and out can fully execute before we change our navigation values
     */
    setTimeout(() => {
      this.store.dispatch(setNavEnd(true));
    }, 300);
    return Observable.of('success').delay(250);
  }

}
