import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState, setNavClose } from '../../store';
import { Store } from '@ngrx/store';
import { getNavOpen, getNavEnd } from '../../store/loading.selectors';
import { Observable } from 'rxjs/Observable';
import { PageComponent } from './../pages.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends PageComponent implements OnInit {
  form: FormGroup;

  constructor(protected store: Store<AppState>) {
    super(store);
  }

  ngOnInit() {
    this.isNavOpen$ = this.store.select(getNavOpen);

    this.isNavEndSubscription = this.store.select(getNavEnd).subscribe(boolean => {
      this.routeLoaded = boolean;
      console.log('this.routeLoaded',this.routeLoaded);
      this.store.dispatch(setNavClose(false));
    });
  }

  ngOnDestroy() {
  }

}
