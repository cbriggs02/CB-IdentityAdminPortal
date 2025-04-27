import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../constants/routes/app-routes.constants';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * ErrorComponent - Displays a user-friendly error page when an unexpected
 * error occurs in the application. This component provides a clear message
 * and a navigation link to redirect users back to the dashboard.
 *
 * Used for handling API errors such as HTTP 500 and other unhandled issues.
 */
@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  dashboardRoute = AppRoutes.DASHBOARD;
}
