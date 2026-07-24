import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { selectCourses, selectLoading } from '../store/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.courses$ = this.store.select(selectCourses);
    this.loading$ = this.store.select(selectLoading);
  }

  enroll(id: number): void {
    console.log('Enroll requested:', id);
  }

}
