import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h2>Student Academic Profile</h2>
      <div style="border: 1px solid #ddd; padding: 15px; border-radius: 4px; background: #fff;">
        <p><strong>Scholar Name:</strong> Sharika</p>
        <p><strong>Affiliated Registration ID:</strong> s1</p>
        
        <h3 style="margin-top: 20px;">Current Registered Enrollments:</h3>
        
        <div *ngIf="enrolledItems.length === 0" style="color: #888; font-style: italic;">
          No active course registration matches indexed for this student.
        </div>

        <ul *ngIf="enrolledItems.length > 0">
          <li *ngFor="let registration of enrolledItems" style="margin-bottom: 8px;">
            Course Placement Match ID: <strong>{{ registration.courseId }}</strong>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class StudentProfileComponent implements OnInit {
  enrolledItems: any[] = [];
  private enrollmentService: EnrollmentService = inject(EnrollmentService);

  ngOnInit(): void {
    this.enrollmentService.getStudentsByCourse('101').subscribe((data: any[]) => {
      this.enrolledItems = data;
    });
  }
}
