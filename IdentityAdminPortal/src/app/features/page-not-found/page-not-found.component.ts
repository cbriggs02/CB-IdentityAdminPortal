import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../core/constants/routes/app-routes.constants';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * PageNotFoundComponent - A component displayed when the user navigates to a page that does not exist.
 * This component serves as the 404 Page Not Found page and includes a link to return to the home page.
 */
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class NotFoundComponent {
  dashboardRoute = AppRoutes.DASHBOARD;
}
