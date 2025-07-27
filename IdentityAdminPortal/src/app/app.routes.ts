import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { RoleGuard } from './core/guards/role/role.guard';
import { GlobalRole, AppRoles } from './core/enums/roles.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * routes - Defines the routing configuration for the application.
 */
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: AppRoles },
    children: [
      {
        path: 'dashboards',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'audit-logs',
        canActivate: [RoleGuard],
        data: { roles: [GlobalRole.SuperAdmin] },
        loadComponent: () =>
          import('./features/audit-logs/audit-logs.component').then(
            (m) => m.AuditLogsComponent
          ),
      },
      {
        path: 'audit-log/:id',
        canActivate: [RoleGuard],
        data: { roles: [GlobalRole.SuperAdmin] },
        loadComponent: () =>
          import(
            './features/audit-logs/audit-log-details/audit-log-details.component'
          ).then((m) => m.AuditLogDetailsComponent),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./features/users/users.component').then(
            (m) => m.UsersComponent
          ),
      },
      {
        path: 'user/:id',
        loadComponent: () =>
          import('./features/users/user-details/user-details.component').then(
            (m) => m.UserDetailsComponent
          ),
      },
    ],
  },
  {
    path: 'access-denied',
    loadComponent: () =>
      import('./features/unauthorized/unauthorized.component').then(
        (m) => m.UnauthorizedComponent
      ),
  },
  {
    path: 'forbidden',
    loadComponent: () =>
      import('./features/forbidden/forbidden.component').then(
        (m) => m.ForbiddenComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./features/error/error.component').then((m) => m.ErrorComponent),
  },
  {
    path: 'page-not-found',
    loadComponent: () =>
      import('./features/page-not-found/page-not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];
