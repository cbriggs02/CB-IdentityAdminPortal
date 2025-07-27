import { Observable } from 'rxjs';
import { UserStateMetricResponse } from './models/users/user-state-metrics-response.interface';
import { HttpResponse } from '@angular/common/http';
import { UserCreationStatsResponse } from './models/users/user-creation-stats-response.interface';
import { UsersRequest } from './models/users/users-request.interface';
import { UsersResponse } from './models/users/users-response.interface';
import { UserResponse } from './models/users/user-response.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * IUserService - Defines the contract for user-related operations within the application.
 * This interface specifies the methods that any implementing service must provide,
 * ensuring consistency and facilitating dependency injection for user management functionalities.
 */
export interface IUserService {
  /**
   * Retrieves the user state metrics from the backend API.
   * This includes the total count of users, activated users, and deactivated users.
   */
  getUserStateMetrics(): Observable<HttpResponse<UserStateMetricResponse>>;

  /**
   * Retrieves user creation statistics from the backend API.
   * This typically includes the number of users created over time, grouped by date.
   * Useful for visualizing user registration trends or generating usage reports.
   */
  getUserCreationStats(): Observable<HttpResponse<UserCreationStatsResponse>>;

  /**
   * Retrieves a paginated list of simplified users, optionally filtered by account status.
   * Supports pagination to limit and navigate through large user datasets.
   *
   * @param request The filter and pagination criteria for retrieving users.
   * @returns An observable containing the HTTP response with the list of users and metadata.
   */
  getUsers(request: UsersRequest): Observable<HttpResponse<UsersResponse>>;

  /**
   * Retrieves the detailed information of a specific user by their unique identifier.
   * Typically used when viewing or editing a user's profile.
   *
   * @param id The unique identifier of the user.
   * @returns An observable containing the user's detailed information.
   */
  getUserDetails(id: string): Observable<UserResponse>;

  /**
   * Deletes a user account by their unique identifier.
   * This operation is typically restricted to administrators and permanently removes the user's data from the system.
   * Use with caution, as this action cannot be undone.
   *
   * @param id The unique identifier of the user to delete.
   * @returns An observable indicating completion of the deletion operation.
   */
  deleteUser(id: string): Observable<void>;

  /**
   * Activates a user account by their unique identifier.
   * Often used by administrators to enable access for a deactivated user.
   *
   * @param id The unique identifier of the user to activate.
   * @returns An observable indicating completion of the operation.
   */
  activateUser(id: string): Observable<void>;

  /**
   * Deactivates a user account by their unique identifier.
   * Used to temporarily or permanently disable user access.
   *
   * @param id The unique identifier of the user to deactivate.
   * @returns An observable indicating completion of the operation.
   */
  deactivateUser(id: string): Observable<void>;

  /**
   * Assigns a role to a user based on their unique identifier.
   *
   * @param id The unique identifier of the user to whom the role is assigned.
   * @param roleId The unique identifier of the role to assign to the user.
   * @returns An observable indicating completion of the operation.
   */
  assignRole(id: string, roleId: string): Observable<void>;

  /**
   * Removes the assigned role from a user account using their unique identifier.
   *
   * @param id The unique identifier of the user whose role is being removed.
   * @returns An observable indicating completion of the operation.
   */
  removeAssignedRole(id: string): Observable<void>;
}
