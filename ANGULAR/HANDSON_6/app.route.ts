import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { HomeComponent } from './pages/home/home.ts';
import { StudentProfileComponent } from './pages/student-profile/student-profile.ts';
import { NotificationSandboxComponent } from './pages/notification/notification.ts';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'enroll', component: EnrollmentFormComponent },
  { path: 'enroll-reactive', component: ReactiveEnrollmentFormComponent },
  { path: 'profile', component: StudentProfileComponent },
  { path: 'di-sandbox', component: NotificationSandboxComponent }
];
