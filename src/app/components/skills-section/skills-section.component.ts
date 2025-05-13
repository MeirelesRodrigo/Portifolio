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
  selector: 'app-skills-section',
  imports: [FontAwesomeModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init();
  }
  faJs = faJs
  faNode = faNode
  faPython = faPython
  faAngular = faAngular
  faReact = faReact
  faHtml5 = faHtml5
  faCss3 = faCss3
  faSass = faSass
  faFigma = faFigma
}
