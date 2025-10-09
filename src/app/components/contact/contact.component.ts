import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; 
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import emailjs from '@emailjs/browser';


import {LottieComponent, AnimationOptions } from 'ngx-lottie';

  


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    LottieComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private fb: FormBuilder) {}

  options: AnimationOptions = {
    path: '../../../assets/animations/Success.json',
  };
  options2: AnimationOptions = {
    path: '../../../assets/animations/Failed_Status.json',
  };

  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[A-Za-zأ-يء\s]+$/),
      ],
    ],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  showSpinner: boolean = false;
  showAlert: boolean = false;
  showAlertFailed: boolean = false;
  sendEmail() {
   
    if (this.contactForm.valid) {
      this.showSpinner = true;

      emailjs
        .send(
          'service_wc5muyo',
          'template_1thq89j',
          {
            from_email: this.contactForm.value.email,
            from_name: this.contactForm.value.name,

            message: this.contactForm.value.message,
          },
          'gg_0LsuX5O6h5ogtg'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.showSpinner = false;
            this.showAlert = true;
            this.contactForm.reset();
        
          },
          (error) => {
            this.showSpinner = false;
            this.showAlertFailed = true
            console.log('FAILED...', error);
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
    }

        setTimeout(() => {
          if(this.showAlert || this.showAlertFailed == true){
          this.showAlert = false;
          this.showAlertFailed = false;
          }
        }, 4000);
  }
}
