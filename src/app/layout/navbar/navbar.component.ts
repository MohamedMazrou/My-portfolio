import { NgClass, NgIf } from '@angular/common';
import { LangService } from './../../services/lang.service';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, NgClass, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public _LangService: LangService) {}

  darkmood: boolean = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (localStorage.getItem('dark') == 'false') {
      document.documentElement.classList.add('dark');
      this.darkmood = false;
    }
  }
  showNav: boolean = false;

  changeMood(): void {
    this.darkmood = !this.darkmood;
    if (this.darkmood == false) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark', `${this.darkmood}`);
    } else {
      localStorage.setItem('dark', `${this.darkmood}`);
      document.documentElement.classList.remove('dark');
    }
  }

  changeLang(event: Event): void {
    const lang = (event.target as HTMLSelectElement).value;
    localStorage.setItem('lang', lang);
    this._LangService.switchLang(lang);
  }

  showNavMobile(): void {
    this.showNav = !this.showNav;
    if(this.showNav){
      document.body.style.overflow = "hidden";
    }
    else document.body.style.overflow = 'auto';
  }

  topScroll(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
