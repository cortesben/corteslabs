import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  transitionStart: boolean;

  constructor(private globals: Globals) { }

  ngOnInit() {
    setTimeout(() => {
      this.transitionStart = this.globals.loaded;
    }, 0);
  }

}
