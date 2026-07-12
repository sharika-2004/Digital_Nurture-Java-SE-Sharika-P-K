import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
     
      if (error.status === 401) {
        console.warn('Unauthorized request intercepted. Redirecting to entry layout.');
        router.navigate(['/']);
      } else if (error.status === 500) {
        alert('Internal System Pipeline Error (500). Please communicate with an admin.');
      }
      return throwError(() => error);
    })
  );
};
