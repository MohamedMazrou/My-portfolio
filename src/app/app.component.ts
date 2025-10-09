import { LangService } from './services/lang.service';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private _LangService: LangService) {}

  title = 'portfolio';
  showButton = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 200) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  // يطلع لفوق
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
