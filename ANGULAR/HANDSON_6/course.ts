import { Injectable } from '@angular/core';
import { Course } from '../types/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 101, title: 'Introduction to Angular', credits: 4, enrolled: false, gradeStatus: 'passed' },
    { id: 102, title: 'Advanced TypeScript & Basics', credits: 3, enrolled: false, gradeStatus: 'pending' },
    { id: 103, title: 'UI/UX Design Fundamentals', credits: null, enrolled: false, gradeStatus: 'failed' },
    { id: 104, title: 'Database Management Systems', credits: 3, enrolled: false, gradeStatus: 'passed' },
    { id: 105, title: 'Web Security Architectures', credits: 4, enrolled: false, gradeStatus: 'pending' }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
