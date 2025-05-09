import {
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { apiErrorInterceptor } from './core/interceptors/api-error.interceptor';
import { GlobalErrorHandlerService } from './core/error-handling/global-error-handler.service';

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
    provideHttpClient(withInterceptors([apiErrorInterceptor])),
    provideAnimations(),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
};
