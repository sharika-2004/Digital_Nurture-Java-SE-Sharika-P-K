import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form'; // Added this line

export const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'enroll', component: EnrollmentFormComponent },
  { path: 'enroll-reactive', component: ReactiveEnrollmentFormComponent } // Task 1 (Step 48) Route
];
