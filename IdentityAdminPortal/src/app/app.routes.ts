/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * routes - Defines the routing configuration for the application.
 *
 * This file configures the available routes and their associated components.
 * Currently, the default path ('') maps to the LoginComponent.
 *
 * Dependencies:
 * - Routes: Angular's routing configuration interface, used to define paths and their corresponding components.
 * - LoginComponent: The component rendered when the user navigates to the default path ('').
 *
 * Usage:
 * - The `routes` array is imported and used in the `provideRouter` provider in the app configuration
 *   to enable routing throughout the application.
 */
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [{ path: '', component: LoginComponent }];
