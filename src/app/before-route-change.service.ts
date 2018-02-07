import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BeforeRouteChangeService implements Resolve<any> {

  constructor(private http: Http) { }

  resolve(route: ActivatedRouteSnapshot, rsstate: RouterStateSnapshot): Observable<any> {
    console.log('Logging collected route Prameter', route.params['name']);
    return this.http.get('https://hacker-news.firebaseio.com/v0/item/192327.json?print=pretty');
  }

}
