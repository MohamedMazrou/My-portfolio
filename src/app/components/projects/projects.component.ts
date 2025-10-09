import { NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {

  ovarlay:boolean = false;
   project1!:string;
   project2!:string;
   project3!:string;
   project4!:string;
  showProjectandOverlay(nameProject:string):void{
     this.ovarlay = !this.ovarlay;
     if(this.ovarlay){
       window.document.body.style.overflowY = "hidden";
     }else  window.document.body.style.overflowY = 'auto';
    
    this.project1 = nameProject;
    this.project2 = nameProject;
  }


hiddenProgectsandOverlay():void{
  this.ovarlay = false;
   window.document.body.style.overflowY = 'auto';
  this.project1 = ''
  this.project2 = ''
  this.project3 = ''
  this.project4 = ''
}
}


