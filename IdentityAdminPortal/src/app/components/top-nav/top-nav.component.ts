/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * TopNavComponent - This component represents the top navigation bar of the application.
 * It is responsible for displaying the navigation menu and providing a logout functionality.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AppRoutes } from '../../constants/routes/app-routes.constants';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent {
  /**
   * Constructor to inject AuthService and Router
   * @param authService The AuthService to manage authentication
   * @param router The Router to navigate to different pages
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * logout - Handles the user logout process.
   *
   * This method calls the AuthService to log out the user and clear any authentication tokens.
   * After logging out, it navigates the user to the home page (or login page) to complete the logout process.
   */
  logout() {
    this.authService.logout();
    this.router.navigate([AppRoutes.LOGIN]);
  }
}
