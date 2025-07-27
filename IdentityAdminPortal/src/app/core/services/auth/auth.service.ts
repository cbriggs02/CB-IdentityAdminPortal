import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_ROUTES } from '../../constants/routes/api-routes.constants';
import { IAuthService } from '../../interfaces/auth/auth.service.interface';
import { LoginCredentials } from '../../interfaces/auth/models/login-credentials.interface';
import { AuthResponse } from '../../interfaces/auth/models/auth-response.interface';
import { ValidatorService } from '../utilities/validator.service';
import {
  UserFieldLabels,
  ValidationObjectLabels,
} from '../../enums/validation-labels.enum';

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
   * Constructs the AuthService with required dependencies.
   *
   * @param http - Angular HttpClient used to make HTTP requests to the backend API.
   * @param validatorService - Service used to validate login credentials before making requests.
   */
  constructor(
    private readonly http: HttpClient,
    private readonly validatorService: ValidatorService
  ) {}

  /**
   * Logs the user in by sending credentials to the backend API.
   * @param credentials The LoginCredentials object containing username and password.
   * @returns Observable that resolves with the authentication response.
   */
  login(credentials: LoginCredentials): Observable<AuthResponse> {
    this.validatorService.validateObject(
      credentials,
      ValidationObjectLabels.LoginCredentials
    );
    this.validatorService.validateString(
      credentials.username,
      UserFieldLabels.UserName
    );
    this.validatorService.validateString(
      credentials.password,
      UserFieldLabels.Password
    );

    return this.http
      .post<AuthResponse>(API_ROUTES.LOGIN.TOKENS, credentials)
      .pipe(
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
