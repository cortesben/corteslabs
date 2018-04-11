import { Component } from '@angular/core';
import { PageComponent } from './../pages.component';

@Component({
  selector: 'ben-content',
  templateUrl: './../pages.component.html',
  styleUrls: ['./../pages.component.scss']
})
export class BenComponent extends PageComponent {
  title: string = 'ben';
  body: string[] = [
    `My name is Ben I enjoy creating user interfaces for modern web applications.`,
    `I began my career in design some time ago. I have been fortunate enough to have worked on consumer facing products. From brands like Nikon, Michael Kors, Jill Sanders, Wall Street Journal to Foodnetwork and now at Kaplan.`,
    `One thing that always stuck with me working on consumer brands was how important the identity of these brands are to the companies that establish them.`,
    `As my career evolved from designer to developer I was able to leverage my understanding of what makes a strong brand and bring that along into what I developed.`,
    `This has created a passion in me to create UI that brings brands along and creates an experience for the user as a central pillar of the application or site they are using.`,
    `The world of developing is just as creative as the world of design in my opinion.`,
    `With modern web technologies that allow for single page applications the things we can create are really something of an inspiration. I believe the web is still a very strong platform and with the recent advances in CSS along with web workers that allow for offline support we have only begun to tap into the next wave of web applications.`
  ];

}
