/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuthGuard - A route guard that protects routes requiring authentication.
 * It ensures that only users with a valid authentication token can access
 * specific routes. If no token is found, it redirects the user to the login page.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   * Constructor for AuthGuard.
   * Injects the AuthService to check authentication status,
   * and the Router to perform navigation.
   *
   * @param authService - Service to retrieve the authentication token.
   * @param router - Router service used to redirect users.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Determines whether a route can be activated based on authentication state.
   * Checks if a valid authentication token exists in session storage.
   * If not authenticated, the user is redirected to the login page.
   *
   * @returns True if the user has a valid token, false otherwise.
   */
  canActivate(): boolean {
    const token = this.authService.getAuthToken();

    if (token) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
