/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * IAuthService - An interface that defines methods for user authentication.
 * Provides the contract for login and logout functionality.
 *
 * Dependencies:
 * - None.
 *
 * Usage:
 * - This interface is implemented by the `AuthService` class to handle authentication logic.
 * - The `login` method sends credentials to the API and returns an observable that can be subscribed to.
 * - The `logout` method clears any authentication-related data or tokens.
 */
import { Observable } from 'rxjs';
import { LoginCredentials } from '../models/login-credentials.model';

export interface IAuthService {
  /**
   * Logs the user in by sending their credentials to the authentication API.
   *
   * @param credentials The credentials object containing the user's username and password.
   * @returns Observable that resolves with the authentication response.
   */
  login(credentials: LoginCredentials): Observable<any>;

  /**
   * Logs the user out by clearing authentication-related data or tokens.
   * This method doesn't take any parameters.
   */
  logout(): void;

  /**
   * Retrieves the current authentication token.
   *
   * @returns The authentication token or null if not authenticated.
   */
  getAuthToken(): string | null;
}
