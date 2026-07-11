import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card';
import { Course } from '../types/course.interface';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html'
})
export class CourseListComponent implements OnInit {
  isLoading: boolean = true;
  courses: Course[] = [];

  
  constructor(private cdr: ChangeDetectorRef) {} 

  ngOnInit(): void {
    setTimeout(() => {
      this.courses = [
        { id: 101, title: 'Introduction to Angular', credits: 4, enrolled: true, gradeStatus: 'passed' },
        { id: 102, title: 'Advanced TypeScript & Basics', credits: 3, enrolled: false, gradeStatus: 'pending' },
        { id: 103, title: 'UI/UX Design Fundamentals', credits: null, enrolled: false, gradeStatus: 'failed' }
      ];
      this.isLoading = false;
      
      
      this.cdr.detectChanges(); 
      console.log("Timer finished! UI updated.");
      
    }, 1500); 
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
