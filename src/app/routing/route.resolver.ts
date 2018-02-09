import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RouteResolver implements Resolve<Observable<any>>{

  constructor() { }

  resolve(): Observable<any>{
    return Observable.of('I\'m in!').delay(1000);
  }

}
