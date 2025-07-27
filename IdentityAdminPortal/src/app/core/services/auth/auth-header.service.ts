import { HttpHeaders } from '@angular/common/http';
import { IAuthHeaderService } from '../../interfaces/auth/auth-header.service.interface';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuthHeaderService - Service responsible for constructing HTTP authorization
 * headers with a bearer token for authenticated API requests. This service
 * implements the IAuthHeaderService interface and relies on an AuthService
 * to retrieve the authentication token.
 */
@Injectable({ providedIn: 'root' })
export class AuthHeaderService implements IAuthHeaderService {
  /**
   * Constructor for the AuthHeaderService.
   *
   * @param authService - Injected AuthService instance used to retrieve the
   * authorization token from the authentication system.
   */
  constructor(private readonly authService: AuthService) {}

  /**
   * Builds the HTTP headers required for an authenticated API request.
   *
   * This method retrieves the authorization token from the AuthService
   * and creates an `HttpHeaders` instance with the `Authorization` header
   * set to `Bearer <token>`. If no token is found, an error is thrown.
   *
   * @returns {HttpHeaders} - The HTTP headers object containing the `Authorization`
   * header with the Bearer token.
   */
  buildAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    if (!token) {
      throw new Error('Authorization token is missing');
    }

    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  private getToken(): string | null {
    return this.authService.getAuthToken();
  }
}
