import { Component, Input } from '@angular/core';
import { SectionData } from '../models/section-features.mode';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  @Input() sectionAddress!: SectionData;
}
