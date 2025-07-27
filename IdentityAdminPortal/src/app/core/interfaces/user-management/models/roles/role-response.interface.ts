import { Role } from './role.interface';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * RoleResponse - Interface representing the API response structure for a single role.
 * Used to strongly type the response returned when fetching an individual role.
 */
export interface RoleResponse {
  /**
   * role - The role object containing all properties that define a role.
   */
  readonly role: Role;
}
