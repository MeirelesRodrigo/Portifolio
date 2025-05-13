import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import Writer from 't-writer.js';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  standalone: true,
})
export class HeroSectionComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init();

    const target = document.querySelector('.typewriter');
    if (target) {
      const writer = new Writer(target, {
        loop: false,
        typeColor: 'black',
      });

      writer
        .type('Rodrigo Meireles ;)')
        .rest(500)
        .start();
    }
  }
}
