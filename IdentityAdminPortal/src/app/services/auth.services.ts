/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuthService - A service to handle user authentication logic.
 * Provides methods for login functionality.
 *
 * Dependencies:
 * - HttpClient: Used to make HTTP requests to the authentication API.
 *
 * Usage:
 * - This service is used to send login credentials (username and password) to the API.
 * - The login method returns an observable, which can be subscribed to for handling success or error.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_ROUTES } from '../constants/api-routes';
import { IAuthService } from '../interfaces/auth.service.interface';
import { LoginCredentials } from '../models/login-credentials.model';

@Injectable({ providedIn: 'root' })
export class AuthService implements IAuthService {
  constructor(private http: HttpClient) {}

  /**
   * Logs the user in by sending credentials to the backend API.
   * @param credentials The LoginCredentials object containing username and password.
   * @returns Observable that resolves with the authentication response.
   */
  login(credentials: LoginCredentials): Observable<any> {
    return this.http.post(API_ROUTES.LOGIN, credentials).pipe(
      tap((response: any) => {
        if (response?.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  /**
   * Logs the user out by clearing authentication-related data or tokens.
   * This method doesn't take any parameters.
   */
  logout(): void {
    localStorage.removeItem('authToken');
  }

  /**
   * Retrieves the stored authentication token.
   * @returns The authentication token from localStorage.
   */
  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
