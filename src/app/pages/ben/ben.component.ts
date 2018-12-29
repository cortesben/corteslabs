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
    `I began my career in design some time ago. I have been fortunate enough to have worked on consumer brands such as Nikon, Michael Kors and Jill Sanders.  Most recently, my career has taken me through amazing opportunities at the Wall Street Journal, Food Network, Kaplan Test Prep and currently at Insider. `,
    `As my career evolved from designer to developer, I was able to leverage my understanding of what creates a strong brand experience and how to bring it to life. `,
    `This evolved into a passion for UI  by creating an experience for the user as a central pillar of the application or site they are using.`,
    `The world of web development is just as creative as the world of design in my opinion.`,
    `I find myself growing and learning constantly, drawing an interest in server and mobile technologies lately.`
  ];

}

