import { Component, OnInit } from '@angular/core';
import { Globals } from './../globals';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  transitionStart: boolean;

  constructor(private globals: Globals){}

  ngOnInit() {
    setTimeout(() => {
      this.transitionStart = this.globals.loaded;
    }, 0);
  }

}
