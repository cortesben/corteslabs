import { Component, OnInit } from '@angular/core';

// store
import { Store } from '@ngrx/store';
import { AppState, setNavClose } from '../../store';
import { getNavOpen, getNavEnd } from '../../store/loading.selectors';
import { Observable } from 'rxjs/Observable';

// component
import { PageComponent } from './../pages.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends PageComponent implements OnInit {

  title: string = 'Contact';

  constructor(protected store: Store<AppState>) {
    super(store);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
