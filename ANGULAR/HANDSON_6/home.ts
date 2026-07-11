import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { Course } from '../../types/course.interface';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="background-color: #eef2f7; padding: 15px; border-radius: 6px; margin-top: 15px;">
      <h4>Course Summary Widget (Instance Shared Check)</h4>
      <p>Active Course Catalog Capacity: <strong>{{ courseService.getCourses().length }} Elements</strong></p>
      <button (click)="triggerSimulation()" style="background-color: #28a745; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">
        + Simulate Dynamic Course Addition
      </button>
    </div>
  `
})
export class CourseSummaryWidget {
  constructor(public courseService: CourseService) {}

  triggerSimulation(): void {
    const nextId = 100 + this.courseService.getCourses().length + 1;
    const mockNewCourse: Course = {
      id: nextId,
      title: `Elective Course Study ${nextId}`,
      credits: 3,
      enrolled: false,
      gradeStatus: 'pending'
    };
    this.courseService.addCourse(mockNewCourse);
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CourseSummaryWidget],
  template: `
    <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); font-family: sans-serif;">
      <h2>Welcome to the Academic Portal Dashboard</h2>
      <hr/>
      <div style="margin: 20px 0; padding: 15px; background: #e3f2fd; border-left: 5px solid #007bff; border-radius: 4px;">
        <strong>Portal Summary Statistics:</strong> Available Courses inside Catalog: 
        <span style="font-size: 18px; font-weight: bold; color: #0056b3;">{{ courseService.getCourses().length }}</span>
      </div>
      <app-course-summary-widget></app-course-summary-widget>
    </div>
  `
})
export class HomeComponent {
  constructor(public courseService: CourseService) {}
}
