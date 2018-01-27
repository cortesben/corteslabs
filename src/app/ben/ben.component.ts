import { Component, Input } from '@angular/core';
import { Globals } from './../globals';

@Component({
  selector: 'ben-content',
  templateUrl: './ben.component.html'
})
export class BenComponent {

  @Input() routeLoaded: boolean;
  constructor(private globals: Globals){
    // console.log(globals);
    console.log(this.globals.loaded);
  }
}
