import { Component, OnInit, Input } from '@angular/core';
import { Globals } from './../globals';

@Component({
  selector: 'app-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PageComponent implements OnInit {
  public title: string;
  public body: string[];
  public transitionStart: boolean;

  constructor(public globals: Globals) { }

  toggleNav() {
    this.globals.isOpen = !this.globals.isOpen;
  }

  ngOnInit() {
    // TODO: investigate why we need to push this back to the end of event loop and cannot just set it on Init
    setTimeout(() => {
      this.transitionStart = this.globals.hasLoaded;
    }, 0);
  }

}
