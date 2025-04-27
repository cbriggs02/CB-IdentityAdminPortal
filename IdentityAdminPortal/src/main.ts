import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * main.ts - Entry point for the Angular application.
 * This file bootstraps the root component using the specified application configuration.
 */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
