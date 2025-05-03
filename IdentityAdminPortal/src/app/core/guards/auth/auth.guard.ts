import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AppRoutes } from '../../constants/routes/app-routes.constants';
import { LoggingService } from '../../services/utilities/logging.service';
import { TokenService } from '../../services/auth/token.service';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuthGuard - A route guard that protects routes requiring authentication.
 * It ensures that only users with a valid authentication token can access
 * specific routes. If no token is found, it redirects the user to the login page.
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   * Constructor for the AuthGuard service.
   * Initializes the AuthGuard instance by injecting necessary services:
   * - AuthService: for interacting with authentication-related tasks like retrieving the auth token.
   * - LoggingService: for logging warnings or errors, like unauthorized access attempts or expired tokens.
   * - TokenService: for decoding and checking the validity of the JWT token, including expiration.
   * - Router: for navigating to different routes, specifically redirecting to the login page if access is denied.
   *
   * @param authService - The service responsible for authentication tasks.
   * @param logger - The service used for logging warnings and errors.
   * @param tokenService - The service used for working with JWT tokens and checking expiration.
   * @param router - The Angular Router used for navigation between application routes.
   */
  constructor(
    private authService: AuthService,
    private logger: LoggingService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  /**
   * Determines whether a route can be activated based on the authentication status.
   * If the user does not have a valid token, they are redirected to the login page.
   * If the token is expired, the user is logged out and redirected to the login page.
   *
   * @returns boolean - Whether the route can be activated (true if authorized, false otherwise).
   */
  canActivate(): boolean {
    const token = this.authService.getAuthToken();

    if (!token) {
      this.logActivity('Unauthorized access attempt to protected route.');
      this.redirectToLogin();
      return false;
    }

    if (this.tokenService.isTokenExpired()) {
      this.logActivity('Expired or invalid token. Redirecting to login.');
      this.authService.logout();
      this.redirectToLogin();
      return false;
    }

    return true;
  }

  private redirectToLogin(): void {
    this.router.navigate([AppRoutes.LOGIN]);
  }

  private logActivity(message: string): void {
    this.logger.warning(message);
  }
}
