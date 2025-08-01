import { GlobalRole } from '../../enums/roles.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * IUserContextService - Interface for handling user context-related operations,
 * including retrieving the role of the currently authenticated user.
 */
export interface IUserContextService {
  /**
   * Retrieves the role of the currently authenticated user from the user context.
   *
   * @returns The user's role as a GlobalRole enum, or `null` if no role is available.
   */
  getContextRole(): GlobalRole | null;
}
