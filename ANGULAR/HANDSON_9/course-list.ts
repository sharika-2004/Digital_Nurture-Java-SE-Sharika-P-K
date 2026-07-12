import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCourses } from '../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../store/course/course.selectors';
import { CourseCardComponent } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CourseCardComponent],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h2>Academic Curriculum Listing</h2>

      <!-- Error Notification -->
      <div *ngIf="errorMessage$ | async as error" style="padding: 15px; margin-bottom: 20px; color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb;">
        <strong>System Broadcast Error:</strong> {{ error }}
      </div>

      <!-- Main Observable Core Grid Layout -->
      <div *ngIf="!(isLoading$ | async); else loadingTemplate">
        <div *ngIf="courses$ | async as courses">
          <div *ngIf="courses.length === 0" style="color: #999;">
            No eligible credited course arrays returned.
          </div>

          <!-- Component presentation delegation loop passes down individual objects -->
          <div *ngIf="courses.length > 0" style="display: flex; flex-direction: column; gap: 15px;">
            <app-course-card 
              *ngFor="let item of courses" 
              [course]="item">
            </app-course-card>
          </div>
        </div>
      </div>

      <ng-template #loadingTemplate>
        <div style="color: #666; font-style: italic; padding: 10px;">
          Querying NgRx Store Core State Array Node...
        </div>
      </ng-template>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  private store = inject(Store);


  courses$ = this.store.select(selectAllCourses);
  isLoading$ = this.store.select(selectCoursesLoading);
  errorMessage$ = this.store.select(selectCoursesError);

  ngOnInit(): void {
    
    this.store.dispatch(loadCourses());
  }
}
