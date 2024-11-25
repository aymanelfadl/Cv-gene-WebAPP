import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cv-templates',
  templateUrl: './cv-templates.component.html',
  styleUrls: ['./cv-templates.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
})
export class CvTemplatesComponent {
  templates: string[] = ['1.jpg', '2.png', '2.png'];
  currentTemplateIndex: number = 0;
  showPopup: boolean = false;
  showNextPopup: boolean = false;
  popupFormData = {
    name: '',
    email: '',
    city: '',
    linkdin: '',
    data_birth: '',
    country: '',
  };
  nextPopupFormData = {
    university: '',
    startYear: '',
    endYear: '',
    speciality: '',
    description: '',
    experience: '',
  };

  showNextForm() {
    this.showPopup = false;
    this.showNextPopup = true;
  }

  closeNextPopup() {
    this.showNextPopup = false;
  }

  onSubmitNextPopupForm() {
    // Handle next form submission logic here
    console.log('Next form submitted:', this.nextPopupFormData);
    this.closeNextPopup();
  }
  autoScroll() {
    setInterval(() => {
      if (this.currentTemplateIndex < this.templates.length - 1) {
        this.currentTemplateIndex++;
      } else {
        this.currentTemplateIndex = 0;
      }
    }, 10000);
  }

  ngOnInit() {
    this.autoScroll();
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  onSubmitPopupForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.popupFormData);
    this.closePopup();
  }
}
