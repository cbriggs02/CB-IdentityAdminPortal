/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * app.config.ts - Application-level configuration.
 * This file defines global providers such as routing, HTTP client, and zone change detection.
 * It is used during application bootstrap in main.ts.
 */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
