import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { apiErrorInterceptorInterceptor } from './interceptors/api-error.interceptor.interceptor';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * app.config.ts - Application-level configuration.
 * This file defines global providers such as routing, HTTP client, and zone change detection.
 * It is used during application bootstrap in main.ts.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiErrorInterceptorInterceptor])),
    provideAnimations(),
  ],
};
