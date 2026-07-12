import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Course } from '../services/course';
import { enrollInCourse, unenrollFromCourse } from '../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../store/enrollment/enrollment.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true }) course!: Course;
  private store = inject(Store);

  
  isEnrolled$!: Observable<boolean>;

  ngOnInit(): void {
    const id = Number(this.course.id);
    this.isEnrolled$ = this.store.select(selectEnrolledIds).pipe(
      map(ids => ids.includes(id))
    );
  }

  toggleEnrollment(currentStatus: boolean): void {
    const id = Number(this.course.id);
    if (currentStatus) {
      this.store.dispatch(unenrollFromCourse({ courseId: id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: id }));
    }
  }
}
