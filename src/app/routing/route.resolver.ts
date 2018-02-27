import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Globals } from './../globals';
import { setNavEnd, AppState } from '../store';
import { Store } from '@ngrx/store';

@Injectable()
export class RouteResolver implements Resolve<Observable<any>>{

  constructor(private globals: Globals, private store: Store<AppState>) { }

  resolve(): Observable<any> {
    setTimeout(() => {
      this.store.dispatch(setNavEnd(true));
    }, 300);
    return Observable.of('I\'m in!').delay(300);
  }

}
