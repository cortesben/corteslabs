import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  loaded: boolean = false;
  randomColor: string = null;
  isOpen: boolean = false;
  isFetching: boolean = false;
}