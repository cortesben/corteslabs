import { Component } from '@angular/core';
import { PageComponent } from './../pages.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './../pages.component.html',
  styleUrls: ['./../pages.component.scss']
})
export class NotFoundComponent extends PageComponent {
  title: string = 'What ever you are looking for is not here!';
  body: string[] = [
    'You lost!'
  ];

}
