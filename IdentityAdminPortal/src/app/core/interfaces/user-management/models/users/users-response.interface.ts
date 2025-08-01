import { AccountStatus } from '../../../../enums/account-status.enum';
import { GlobalRole } from '../../../../enums/roles.enum';
import { PaginationResponse } from '../../../models/pagination-response.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * SimplifiedUser - A lightweight representation of a user object
 * used primarily for displaying user data in lists or tables.
 * It contains only the essential information required for such views.
 */
export interface SimplifiedUser {
  /** Unique identifier for the user */
  readonly id: string;

  /** The user's username (login or display name) */
  readonly userName: string;

  /** The full display name of the user (e.g., first + last name) */
  readonly name: string;

  /** The current status of the user's account (e.g., Active, Inactive) */
  readonly accountStatus: AccountStatus;

  /** The users role or null if not assigned one yet */
  readonly roleName?: GlobalRole;
}

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UsersResponse - Represents the structure of the response returned
 * when requesting a paginated list of users. It includes the user data
 * and associated pagination metadata.
 */
export interface UsersResponse {
  /** List of users returned for the current page */
  readonly users: SimplifiedUser[];

  /** Pagination metadata including total pages, current page, and total items */
  readonly paginationMetadata: PaginationResponse;
}
