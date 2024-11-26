import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

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
  userForm: FormGroup;
  isPopupOpen: boolean = false;
  closePopup() {
    this.isPopupOpen = false;
  }

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      linkedin: ['', Validators.required],
      date_birth: ['', Validators.required],
      education: this.fb.array([]),
      work_experience: this.fb.array([]),
      skills: this.fb.array([]),
      template_index: [this.currentTemplateIndex, Validators.required],
    });
  }

  get education(): FormArray {
    return this.userForm.get('education') as FormArray;
  }

  get work_experience(): FormArray {
    return this.userForm.get('work_experience') as FormArray;
  }

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  addEducation() {
    this.education.push(
      this.fb.group({
        degree: ['', Validators.required],
        institution: ['', Validators.required],
        year: ['', Validators.required],
      })
    );
  }

  addWorkExperience() {
    this.work_experience.push(
      this.fb.group({
        job_title: ['', Validators.required],
        company: ['', Validators.required],
        years: ['', Validators.required],
      })
    );
  }

  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
