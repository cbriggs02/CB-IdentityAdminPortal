import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../../core/constants/routes/app-routes.constants';

/**
 * @Author   : Christian Briglio
 * @Created  : 2025
 *
 * SideNavComponent - This component represents the sidebar navigation of the application.
 * It is responsible for displaying the navigation links and routing to the dashboard.
 */
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  dashboardRoute = AppRoutes.DASHBOARD;
}
