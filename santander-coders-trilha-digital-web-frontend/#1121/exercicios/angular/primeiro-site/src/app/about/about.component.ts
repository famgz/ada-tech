import { SectionData } from './../models/section-features.mode';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() sectionAbout!: SectionData;
}
