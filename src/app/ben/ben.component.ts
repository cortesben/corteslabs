import { Component, Input, OnInit } from '@angular/core';
import { Globals } from './../globals';

@Component({
  selector: 'ben-content',
  templateUrl: './ben.component.html'
})
export class BenComponent implements OnInit {
  transitionStart: boolean;

  @Input() routeLoaded: boolean;
  constructor(private globals: Globals) {}

  ngOnInit() {
    setTimeout(() => {
      this.transitionStart = this.globals.loaded;
    }, 0);
  }
}
