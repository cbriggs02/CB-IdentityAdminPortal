import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ErrorRouteMap } from '../constants/error-route-map.constants';
import { HttpStatusCode } from '../enums/http-status-code.enum';
import { throwError } from 'rxjs/internal/observable/throwError';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * Intercepts HTTP responses to globally handle API errors.
 * Navigates to a specific route based on the HTTP status code if an error occurs.
 *
 * @param req - The outgoing HTTP request.
 * @param next - The next interceptor or backend handler in the HTTP pipeline.
 * @returns An Observable of the HTTP event stream with error handling applied.
 */
export const apiErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const redirectRoute = ErrorRouteMap[error.status as HttpStatusCode];

      if (redirectRoute) {
        router.navigate([redirectRoute]);
      }

      return throwError(() => error);
    })
  );
};
