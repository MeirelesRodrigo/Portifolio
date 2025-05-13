import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { SkillsSectionComponent } from "../../components/skills-section/skills-section.component";
import { ExperienceSectionComponent } from "../../components/experience-section/experience-section.component";
import { ContactSectionComponent } from "../../components/contact-section/contact-section.component";
import { ProjectsSectionComponent } from "../../components/projects-section/projects-section.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroSectionComponent, AboutSectionComponent, SkillsSectionComponent, ExperienceSectionComponent, ContactSectionComponent, ProjectsSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
