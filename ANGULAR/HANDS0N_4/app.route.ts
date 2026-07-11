import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form'; // <-- Updated this line

export const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'enroll', component: EnrollmentFormComponent }
];
