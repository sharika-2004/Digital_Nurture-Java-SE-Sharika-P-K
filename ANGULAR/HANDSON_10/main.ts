import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app/app.component';
import { courseReducer } from './app/store/course.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({
      course: courseReducer
    })
  ]
}).catch(err => console.error(err));
