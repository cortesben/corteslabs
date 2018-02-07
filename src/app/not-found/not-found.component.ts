import { Component, OnInit } from '@angular/core';
import { Globals } from './../globals';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  transitionStart: boolean;

  constructor(private globals: Globals){}

  toggleNav() {
    this.globals.isOpen = !this.globals.isOpen;
  }

  ngOnInit() {
    setTimeout(() => {
      this.transitionStart = this.globals.loaded;
    }, 0);
  }

}
