import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  selectedCourseId = 0;

  courses = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'Java',
      code: 'JAVA102',
      credits: 3,
      gradeStatus: 'failed'
    },

    {
      id: 3,
      name: 'Python',
      code: 'PY103',
      credits: 4,
      gradeStatus: 'pending'
    },

    {
      id: 4,
      name: 'Machine Learning',
      code: 'ML104',
      credits: 5,
      gradeStatus: 'passed'
    },

    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CC105',
      credits: 3,
      gradeStatus: 'pending'
    }

  ];

ngOnInit() {
  setTimeout(() => {
    this.isLoading = false;
    console.log('Loading finished');
  }, 1500);
}

  onEnroll(id: number) {

    console.log("Enrolling in course:", id);

    this.selectedCourseId = id;

  }

  // trackBy improves performance by re-rendering
  // only changed list items instead of the whole list.
  trackByCourseId(index: number, course: any) {

    return course.id;

  }

}
