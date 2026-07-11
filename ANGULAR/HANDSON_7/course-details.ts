import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../types/course.interface';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div style="font-family: sans-serif; background: white; padding: 20px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <a routerLink="/courses" style="color: #007bff; text-decoration: none; font-size: 14px;">← Back to Catalog</a>
      
      <div *ngIf="course; else errorBlock" style="margin-top: 15px;">
        <h3 style="margin: 0 0 10px 0; color: #0056b3;">{{ course.title }}</h3>
        <p><strong>Course ID:</strong> {{ course.id }}</p>
        <p><strong>Credits:</strong> {{ course.credits || 'Elective (No Credits)' }}</p>
        <p><strong>Status:</strong> 
          <span [ngStyle]="{ 'color': course.gradeStatus === 'passed' ? 'green' : 'orange' }" style="font-weight: bold; text-transform: uppercase;">
            {{ course.gradeStatus }}
          </span>
        </p>
      </div>

      <ng-template #errorBlock>
        <div style="margin-top: 15px; color: red; font-weight: bold;">
          Course record not found for the requested ID segment.
        </div>
      </ng-template>
    </div>
  `
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
   
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.course = this.courseService.getCourseById(Number(courseId));
    }
  }
}
