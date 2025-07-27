import { Role } from './role.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * RolesResponse - Interface representing the structure of a response containing a list of roles.
 */
export interface RolesResponse {
  /** An array of Role objects representing available roles in the system. */
  readonly roles: Role[];
}
