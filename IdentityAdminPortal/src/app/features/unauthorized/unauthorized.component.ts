import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../../core/constants/routes/app-routes.constants';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * UnauthorizedComponent - This component is responsible for displaying the "Unauthorized Access" page
 * when a user attempts to access a protected resource without proper authentication.
 * It provides a friendly message to the user and a link to the login page, allowing them
 * to authenticate and access the protected content.
 */
@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css',
})
export class UnauthorizedComponent {
  readonly loginRoute = AppRoutes.LOGIN;
}
