import { Component } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseListComponent],
  template: `<app-course-list></app-course-list>`
})
export class AppComponent {}
