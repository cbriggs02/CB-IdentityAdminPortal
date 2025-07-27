import { AccountStatus } from '../../../../enums/account-status.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * Interface representing the structure of a user retrieval request.
 * Used for paginated fetching of user data, with optional filtering by account status.
 */
export interface UsersRequest {
  /** The page number to retrieve (1-based index) */
  page: number;

  /** The number of users to retrieve per page */
  pageSize: number;

  /** Optional filter to retrieve users by their account status (e.g., Active or Inactive) */
  accountStatus?: AccountStatus;
}
