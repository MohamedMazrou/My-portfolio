import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']); // اللغات المدعومة
    translate.setDefaultLang('en'); // اللغة الافتراضية
    translate.use('en'); // ابدأ بالإنجليزية
  }

   LangStatus:boolean = false;
  newLang:string = "en";
  switchLang(lang: string)   {
    this.newLang = lang; 
    const htmlTag = document.documentElement;
    console.log(lang);
    if (localStorage.getItem('lang') == 'ar') {
    
      this.LangStatus = true;
    } else {
      this.LangStatus = false;
   
    }

    return this.translate.use(lang);
  }
}
