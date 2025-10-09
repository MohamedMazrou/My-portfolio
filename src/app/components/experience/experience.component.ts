import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; 
import { transcode } from 'buffer';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExperienceComponent {

}
