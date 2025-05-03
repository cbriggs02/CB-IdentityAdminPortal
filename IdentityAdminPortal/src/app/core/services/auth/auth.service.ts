import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_ROUTES } from '../../constants/routes/api-routes.constants';
import { IAuthService } from '../../interfaces/auth/auth.service.interface';
import { LoginCredentials } from '../../interfaces/auth/models/login-credentials.interface';
import { AuthResponse } from '../../interfaces/auth/models/auth-response.interface';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuthService - A service to handle user authentication logic.
 * Provides methods for login functionality.
 */
@Injectable({ providedIn: 'root' })
export class AuthService implements IAuthService {
  /**
   * Constructor for the AuthService.
   * Initializes the AuthService instance and injects the necessary dependencies.
   * The constructor primarily sets up the HttpClient to interact with the backend API
   * for authentication-related requests.
   *
   * @param http - The HttpClient service used to make HTTP requests to the backend API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Logs the user in by sending credentials to the backend API.
   * @param credentials The LoginCredentials object containing username and password.
   * @returns Observable that resolves with the authentication response.
   */
  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(API_ROUTES.LOGIN, credentials).pipe(
      tap((response: AuthResponse) => {
        if (response?.token) {
          sessionStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  /**
   * Logs the user out by clearing authentication-related data or tokens.
   * This method doesn't take any parameters.
   */
  logout(): void {
    sessionStorage.removeItem('authToken');
  }

  /**
   * Retrieves the stored authentication token.
   * @returns The authentication token from localStorage.
   */
  getAuthToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
}
