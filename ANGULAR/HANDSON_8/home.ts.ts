import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h2>Welcome to the Academic Portal Dashboard</h2>
      
      <div style="background: #e6f7ff; padding: 15px; border-left: 4px solid #1890ff; margin-bottom: 20px;">
        <strong>Portal Summary Statistics:</strong> Available Courses inside Catalog: 
        <span style="font-weight: bold; color: #0056b3;">
          {{ (courses$ | async)?.length || 0 }}
        </span>
      </div>

      <div style="background: #f5f5f5; padding: 15px; border-radius: 4px;">
        <h3>Course Summary Widget (Instance Shared Check)</h3>
        <p>Active Course Catalog Capacity: <strong>{{ (courses$ | async)?.length || 0 }} Elements</strong></p>
        <button (click)="simulateAddition()" style="background: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">
          + Simulate Dynamic Course Addition
        </button>
      </div>
    </div>
  `
})
export class HomeComponent {
 
  public courseService = inject(CourseService);
  courses$ = this.courseService.getCourses();

  simulateAddition(): void {
    this.courseService.getCourses().subscribe(currentCourses => {
      const nextId = (100 + currentCourses.length + 1).toString();
      
      const mockNewCourse = {
        name: `Simulation Concept Lab ${nextId}`,
        credits: 3,
        status: 'Pending'
      };

      this.courseService.createCourse(mockNewCourse).subscribe(() => {
        this.courses$ = this.courseService.getCourses();
      });
    });
  }
}
