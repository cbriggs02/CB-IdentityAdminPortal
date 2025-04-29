import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './features/page-not-found/page-not-found.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ErrorComponent } from './features/error/error.component';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './features/forbidden/forbidden.component';
import { RoleGuard } from './core/guards/role.guard';
import { Role } from './core/enums/roles.enum';

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
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [Role.Admin, Role.SuperAdmin] },
    children: [{ path: 'dashboards', component: DashboardComponent }],
  },
  { path: 'error/access-denied', component: UnauthorizedComponent },
  { path: 'error/forbidden', component: ForbiddenComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'error/page-not-found', component: NotFoundComponent },

  // Catch-all route for undefined paths
  { path: '**', redirectTo: 'error/page-not-found', pathMatch: 'full' },
];
