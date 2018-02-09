import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from './../../globals';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  transitionStart: boolean;
  date: any;

  constructor(private globals: Globals, private route: ActivatedRoute) { }

  toggleNav() {
    this.globals.isOpen = !this.globals.isOpen;
  }

  ngOnInit() {
    this.date = this.route.snapshot.data;
    console.log(this.globals.isFetching);
    setTimeout(() => {
      this.transitionStart = this.globals.loaded;
    }, 0);
  }

}
