import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.ts'; 
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout.ts'; 
import { CourseDetailComponent } from './pages/course-detail/course-detail.ts'; 
import { StudentProfileComponent } from './pages/student-profile/student-profile.ts'; 
import { NotificationSandboxComponent } from './pages/notification/notification.ts'; 
import { NotFoundComponent } from './pages/not-found/not-found'; 

import { CourseListComponent } from './course-list/course-list';


import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  

  { 
    path: 'courses', 
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },       
      { path: ':id', component: CourseDetailComponent }   
    ]
  },
  
  
  { 
    path: 'enroll', 
    canActivate: [authGuard],
    loadComponent: () => import('./pages/reactive-enrollment-form/reactive-enrollment-form').then(m => m.ReactiveEnrollmentFormComponent)
  },
  { 
    path: 'enroll-reactive', 
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () => import('./pages/reactive-enrollment-form/reactive-enrollment-form').then(m => m.ReactiveEnrollmentFormComponent)
  },
  

  { path: 'profile', component: StudentProfileComponent, canActivate: [authGuard] },
  

  { path: 'di-sandbox', component: NotificationSandboxComponent },
  

  { path: '**', component: NotFoundComponent }
];
