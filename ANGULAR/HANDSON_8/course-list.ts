import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService, Course } from '../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h2>Academic Curriculum Listing</h2>

      <!-- Error Notification Display UI Block -->
      <div *ngIf="errorMessage" style="padding: 15px; margin-bottom: 20px; color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb;">
        <strong>System Broadcast:</strong> {{ errorMessage }}
      </div>

      <!-- Resolve the Observable stream into a local template variable named 'courses' -->
      <div *ngIf="courses$ | async as courses; else loadingTemplate">
        
        <!-- Empty State Block -->
        <div *ngIf="courses.length === 0" style="color: #999;">
          No eligible credited course arrays returned.
        </div>

        <!-- Render Courses List once data arrives -->
        <ul *ngIf="courses.length > 0" style="list-style-type: none; padding: 0;">
          <li *ngFor="let course of courses" style="margin-bottom: 12px; padding: 15px; border: 1px solid #ddd; border-radius: 4px; background: #fafafa;">
            <div style="font-size: 1.2em; font-weight: bold; color: #333;">{{ course.name }}</div>
            <div style="color: #666; margin-top: 4px;">
              Credits: <span style="font-weight: bold;">{{ course.credits }}</span> | 
              Status: <span [style.color]="course.status === 'Active' ? 'green' : 'orange'">{{ course.status }}</span>
            </div>
          </li>
        </ul>

      </div>

      <!-- Fallback Loading Template Layout -->
      <ng-template #loadingTemplate>
        <div style="color: #666; font-style: italic; padding: 10px;">
          Querying core portal API server array...
        </div>
      </ng-template>

    </div>
  `
})
export class CourseListComponent implements OnInit {
  private courseService = inject(CourseService);
  
  
  courses$ = this.courseService.getCourses();
  errorMessage: string | null = null;

  ngOnInit(): void {
    
    this.courses$.subscribe({
      error: (err) => {
        this.errorMessage = 'Failed to load courses from remote database endpoints.';
        console.error(err);
      }
    });
  }
}
