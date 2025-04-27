import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../constants/routes/app-routes.constants';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * ForbiddenComponent - This component is displayed when a user attempts to access a resource or page
 * they do not have permission to view. It is typically used for a 403 Forbidden error.
 *
 */
@Component({
  selector: 'app-forbidden',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.css',
})
export class ForbiddenComponent {
  dashboardRoute = AppRoutes.DASHBOARD;
}
