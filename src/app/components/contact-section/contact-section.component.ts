import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin,
  faInstagram, faWhatsapp
 } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';

 @Component({
  selector: 'app-contact-section',
  imports: [FontAwesomeModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  faLinkedin = faLinkedin
  faInstagram = faInstagram
  faWhatsapp = faWhatsapp
  faEnvelope = faEnvelope
  faMapPin = faMapPin
}
