import { Component } from '@angular/core';
import { PageComponent } from './../pages.component';


@Component({
  selector: 'app-services',
  templateUrl: './../pages.component.html',
  styleUrls: ['./../pages.component.scss']
})
export class ServicesComponent extends PageComponent {
  title: string = 'Services';
  body: string[] = [
    'Creating a clear path to communicate with technology can be challenging. As the web matured, so has best practices and this is what I find this fascinating.',
    'I enjoy creating performant interfaces that feel snappy upon use.',
    'Patterns that scale devices to display utility.',
    'Clear direction of an item and it\'s intended use.',
    'I began my career in design over a decade ago. I have been fortunate enough over the years to have worked on great projects and have allowed me to pick up a few tricks along the way. Blending design and technology provide me with the tools to build and create.'
  ];

}
