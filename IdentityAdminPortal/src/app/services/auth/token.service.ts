import {
  DecodedToken,
  ITokenService,
} from '../../interfaces/auth/token.service.interface';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from './auth.service';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * TokenService - A service to handle operations related to JWT tokens.
 * Provides methods to extract and decode token data from session storage.
 */
@Injectable({ providedIn: 'root' })
export class TokenService implements ITokenService {
  /**
   * Constructor for the TokenService.
   * Initializes the TokenService instance and injects the AuthService dependency.
   * The constructor sets up the AuthService that provides authentication-related methods,
   * including retrieving the authentication token.
   *
   * @param authService - The AuthService used to interact with authentication tokens.
   */
  constructor(private authService: AuthService) {}

  /**
   * Gets the user's unique identifier from the decoded token.
   * @returns The user ID (subject) or null if not found.
   */
  getUserId(): string | null {
    const decoded = this.decodeToken();
    return decoded?.sub ?? null;
  }

  /**
   * Gets the user's roles from the decoded token.
   * @returns An array of roles or an empty array.
   */
  getUserRoles(): string[] {
    const decoded = this.decodeToken();
    if (!decoded?.role) return [];

    return Array.isArray(decoded.role) ? decoded.role : [decoded.role];
  }

  private getToken(): string | null {
    return this.authService.getAuthToken();
  }

  private decodeToken(): DecodedToken | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<DecodedToken>(token);
    } catch (error) {
      return null;
    }
  }
}
