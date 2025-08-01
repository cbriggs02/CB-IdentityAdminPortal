import { AccountStatus } from '../../../../enums/account-status.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * User - Represents the full details of a user in the system.
 * This interface is typically returned by api when requesting user details.
 */
export interface User {
  /** Unique identifier for the user */
  readonly id: string;

  /** The username used for authentication or display */
  readonly userName: string;

  /** User's given name */
  readonly firstName: string;

  /** User's family name */
  readonly lastName: string;

  /** Email address associated with the user */
  readonly email: string;

  /** User's contact phone number */
  readonly phoneNumber: string;

  /** Identifier of the user's country (e.g., foreign key) */
  readonly countryId: number;

  /** Name of the user's country */
  readonly countryName: string;

  /** The current status of the user's account (e.g., Active, Inactive) */
  readonly accountStatus: AccountStatus;

  /** Identifier of the user's assigned role within the system (optional if no role is assigned) */
  readonly roleId?: string;
}

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * UserResponse - Wraps the full user object returned by the API.
 * Used when fetching a single user's data for display or management purposes.
 */
export interface UserResponse {
  /** The full user data returned from the API */
  readonly user: User;
}
