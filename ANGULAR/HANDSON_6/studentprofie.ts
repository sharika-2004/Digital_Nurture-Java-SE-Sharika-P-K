import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); font-family: sans-serif;">
      <h2>Student Academic Profile</h2>
      <hr/>
      <h3>My Registered Academic Courses</h3>
      
      <div *ngIf="enrollmentService.getEnrolledCourses().length === 0" style="color: #666; font-style: italic;">
        No active course enrollments found. Go to the course directory page to register.
      </div>

      <ul style="padding-left: 20px;">
        <li *ngFor="let course of enrollmentService.getEnrolledCourses()" style="margin-bottom: 8px; font-size: 15px;">
          <strong>{{ course.title }}</strong> (Credits: {{ course.credits || 'No Credits' }})
        </li>
      </ul>
    </div>
  `
})
export class StudentProfileComponent {
  constructor(public enrollmentService: EnrollmentService) {}
}
