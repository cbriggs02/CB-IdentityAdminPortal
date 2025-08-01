import { Injectable } from '@angular/core';
import { IUserContextService } from '../../interfaces/auth/user-context.service.interface';
import { GlobalRole } from '../../enums/roles.enum';
import { TokenService } from './token.service';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * UserContextService - Service for retrieving contextual information about the currently authenticated user,
 * such as their assigned role. This is commonly used for role-based access control throughout the application.
 */
@Injectable({ providedIn: 'root' })
export class UserContextService implements IUserContextService {
  /**
   * Constructs the UserContextService with the required token service dependency.
   *
   * @param tokenService - Service used to extract user information, such as roles, from authentication tokens.
   */
  constructor(private readonly tokenService: TokenService) {}

  /**
   * Retrieves the current user's primary role from the authentication token.
   * If no roles are found, returns `null`.
   *
   * @returns The user's role as a `GlobalRole` enum value, or `null` if unavailable.
   */
  getContextRole(): GlobalRole | null {
    const roles = this.tokenService.getUserRoles();
    if (!roles || roles.length === 0) {
      return null;
    }
    return roles[0] as GlobalRole;
  }
}
