import {
  DecodedToken,
  ITokenService,
} from '../../interfaces/auth/token.service.interface';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from './auth.service';
import { CLAIMS } from '../../constants/auth-claims.constants';
import { LoggingService } from '../utilities/logging.service';
import { LogLevels } from '../../enums/log-levels.enum';
import { GlobalRole } from '../../enums/roles.enum';

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
   * Initializes the TokenService instance by injecting the AuthService and LoggingService dependencies.
   * The constructor sets up the AuthService for retrieving authentication-related tokens,
   * and the LoggingService for logging any errors or information related to the token operations.
   *
   * @param authService - The AuthService used to interact with authentication tokens.
   * @param logger - The LoggingService used for logging errors and important information.
   */
  constructor(
    private readonly authService: AuthService,
    private readonly logger: LoggingService
  ) {}

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
  getUserRoles(): GlobalRole[] {
    const decoded = this.decodeToken();
    if (!decoded) return [];

    const roles = decoded[CLAIMS.ROLE];
    if (!roles) return [];

    if (typeof roles === 'string') {
      return [roles as GlobalRole];
    }

    return Array.isArray(roles) ? (roles as GlobalRole[]) : [];
  }

  /**
   * Checks whether the current authentication token is expired.
   * It decodes the token and compares its expiration time (`exp`) to the current time.
   *
   * @returns True if the token is expired or invalid, false otherwise.
   */
  isTokenExpired(): boolean {
    const exp = this.getExpirationDate();
    return !exp || exp < new Date();
  }

  private getExpirationDate(): Date | null {
    const decoded = this.decodeToken();
    return decoded?.exp ? new Date(decoded.exp * 1000) : null;
  }

  private getToken(): string | null {
    const token = this.authService.getAuthToken();
    if (!token) {
      this.logActivity('No auth token found in session', LogLevels.Warning);
    }
    return token;
  }

  private decodeToken(): DecodedToken | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<DecodedToken>(token);
    } catch (error) {
      this.logActivity('Failed to decode the JWT token', LogLevels.Error);
      return null;
    }
  }

  private logActivity(message: string, level: LogLevels): void {
    switch (level) {
      case LogLevels.Warning:
        this.logger.warning(message);
        break;
      case LogLevels.Error:
        this.logger.error(message);
        break;
      default:
        this.logger.log(message);
        break;
    }
  }
}
