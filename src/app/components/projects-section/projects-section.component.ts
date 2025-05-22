import { AfterViewInit, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faJs,
  faNode,
  faPython,
  faAngular,
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';

import * as AOS from 'aos';

@Component({
  selector: 'app-projects-section',
  imports: [FontAwesomeModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent implements AfterViewInit {
  faAngular = faAngular
  faHtml5 = faHtml5
  
  ngAfterViewInit(): void {
        AOS.init();
  }


}
