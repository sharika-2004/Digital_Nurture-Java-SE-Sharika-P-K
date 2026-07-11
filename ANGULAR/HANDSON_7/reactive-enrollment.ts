import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterModule } from '@angular/router';


function forbiddenIdValidator(control: AbstractControl): ValidationErrors | null {
  const forbidden = /100|999/.test(control.value);
  return forbidden ? { forbiddenId: { value: control.value } } : null;
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); font-family: sans-serif; max-width: 600px; margin: auto;">
      <h2 style="color: #333;">Reactive Academic Course Registration Form</h2>
      <p style="color: #666; font-size: 14px;">Please complete the form below to register your structural profile details.</p>
      <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;"/>

      <form [formGroup]="enrollForm" (ngSubmit)="onSubmit()">
        
        <!-- Student ID Field -->
        <div style="margin-bottom: 15px;">
          <label style="display: block; font-weight: bold; margin-bottom: 5px;">Student ID Reference Number</label>
          <input type="number" formControlName="studentId" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
          <div *ngIf="enrollForm.get('studentId')?.touched && enrollForm.get('studentId')?.invalid" style="color: red; font-size: 12px; margin-top: 4px;">
            <span *ngIf="enrollForm.get('studentId')?.errors?.['required']">Student ID is strictly required.</span>
            <span *ngIf="enrollForm.get('studentId')?.errors?.['forbiddenId']">This specific ID block (100 / 999) is restricted.</span>
          </div>
        </div>

        <!-- Contact Nested Group -->
        <div formGroupName="contactInfo" style="border: 1px solid #e9ecef; padding: 15px; border-radius: 6px; background-color: #f8f9fa; margin-bottom: 15px;">
          <h4 style="margin-top: 0; margin-bottom: 10px; color: #495057;">Secure Contact Information</h4>
          
          <div style="margin-bottom: 10px;">
            <label style="display: block; font-size: 13px; margin-bottom: 3px;">Official Institutional Email</label>
            <input type="email" formControlName="email" style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px;" />
            <div *ngIf="enrollForm.get('contactInfo.email')?.touched && enrollForm.get('contactInfo.email')?.invalid" style="color: red; font-size: 12px; margin-top: 4px;">
              Email must be validly formatted.
            </div>
          </div>

          <div>
            <label style="display: block; font-size: 13px; margin-bottom: 3px;">Contact Mobile Number</label>
            <input type="text" formControlName="phone" style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px;" />
          </div>
        </div>

        <!-- Dynamic Course Rows Array -->
        <div formArrayName="selectedCourses" style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 10px; color: #495057;">Dynamic Requested Curriculum Rows</h4>
          
          <div *ngFor="let item of selectedCourses.controls; let idx = index" [formGroupName]="idx" style="display: flex; gap: 10px; margin-bottom: 10px; align-items: center;">
            <input type="text" formControlName="courseTitle" placeholder="Course Title String" style="flex: 2; padding: 6px; border: 1px solid #ccc; border-radius: 4px;" />
            <input type="number" formControlName="credits" placeholder="Credits" style="flex: 1; padding: 6px; border: 1px solid #ccc; border-radius: 4px;" />
            <button type="button" (click)="removeCourseRow(idx)" style="background-color: #dc3545; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">Remove</button>
          </div>

          <button type="button" (click)="addCourseRow()" style="background-color: #007bff; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; margin-top: 5px;">
            + Add Course Row Selection
          </button>
        </div>

        <!-- Submission Controls Container -->
        <div style="display: flex; gap: 10px; border-top: 1px solid #eee; padding-top: 15px;">
          <button type="submit" [disabled]="enrollForm.invalid" style="background-color: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; flex: 1;">
            Submit Enrollment Registry
          </button>
          <button type="button" (click)="resetForm()" style="background-color: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-weight: bold;">
            Reset Form
          </button>
        </div>

      </form>
    </div>
  `
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentId: ['', [Validators.required, forbiddenIdValidator]],
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['']
      }),
      selectedCourses: this.fb.array([])
    });

 
    this.addCourseRow();
  }

  get selectedCourses(): FormArray {
    return this.enrollForm.get('selectedCourses') as FormArray;
  }

  addCourseRow(): void {
    const row = this.fb.group({
      courseTitle: ['', Validators.required],
      credits: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
    this.selectedCourses.push(row);
  }

  removeCourseRow(index: number): void {
    this.selectedCourses.removeAt(index);
  }

  resetForm(): void {
    this.enrollForm.reset();
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      console.log('Form successfully committed data to engine logs:', this.enrollForm.value);
      alert('Registration successful! Form state marked clean.');
      this.enrollForm.markAsPristine(); 
    }
  }

 
  hasUnsavedChanges(): boolean {
    return this.enrollForm ? this.enrollForm.dirty : false;
  }
}
