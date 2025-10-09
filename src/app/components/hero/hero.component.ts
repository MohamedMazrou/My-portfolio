import { LangService } from './../../services/lang.service';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; 


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule,NgClass,],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  constructor(public _LangService: LangService) { }
}
