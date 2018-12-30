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
    'Web site development',
    'Web application development',
    'Custom enhancements to your existing websites/application',
    'Custom features to your existing website/application'
  ];
  siteTech: string[] = [
    'JAMstack site',
    'Javascript',
    'Components',
    'SCSS for Styling',
    'HTML'
  ];

}
