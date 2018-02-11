import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Globals } from './../globals';

@Injectable()
export class RouteResolver implements Resolve<Observable<any>>{

  constructor(private globals: Globals) { }

  resolve(): Observable<any>{
    console.log(this.globals.isFetching);
    setTimeout(()=>{
      this.globals.isFetching = false;
    }, 250);
    return Observable.of('I\'m in!').delay(300);
  }

}