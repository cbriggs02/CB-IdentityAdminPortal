/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * NotFoundComponent - A component displayed when the user navigates to a page that does not exist.
 * This component serves as the 404 Page Not Found page and includes a link to return to the home page.
 */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../constants/app-routes.constants';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './404.component.html',
  styleUrl: './404.component.css',
})
export class NotFoundComponent {
  dashboardRoute = AppRoutes.DASHBOARD;
}
