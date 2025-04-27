import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * routes - Defines the routing configuration for the application.
 */
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'dashboards', component: DashboardComponent }],
  },
  { path: 'error/access-denied', component: UnauthorizedComponent },
  { path: 'error/forbidden', component: ForbiddenComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'error/page-not-found', component: NotFoundComponent },

  // Catch-all route for undefined paths
  { path: '**', redirectTo: 'error/page-not-found', pathMatch: 'full' },
];
