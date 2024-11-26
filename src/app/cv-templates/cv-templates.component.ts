import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SpeakerWaveIcon } from '@heroicons/vue/16/solid';

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
        university: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required],
        speciality: ['', Validators.required],
        descreption: ['', Validators.required],
      })
    );
  }

  addWorkExperience() {
    this.work_experience.push(
      this.fb.group({
        post: ['', Validators.required],
        start_year: ['', Validators.required],
        end_year: ['', Validators.required],
        company_name: ['', Validators.required],
        description: ['', Validators.required],
      })
    );
  }

  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.resetForm();
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.resetForm();
      this.isPopupOpen = false;
    }
  }

  resetForm() {
    this.userForm.reset({
      name: '',
      country: '',
      city: '',
      email: '',
      linkedin: '',
      date_birth: '',
      education: this.fb.array([]),
      work_experience: this.fb.array([]),
      skills: this.fb.array([]),
      template_index: this.currentTemplateIndex,
    });
  }
}
