import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTES } from '../../constants/routes/api-routes.constants';
import { IUserService } from '../../interfaces/user-management/user.service.interface';
import { UserStateMetricResponse } from '../../interfaces/user-management/models/users/user-state-metrics-response.interface';
import { AuthHeaderService } from '../auth/auth-header.service';
import { UserCreationStatsResponse } from '../../interfaces/user-management/models/users/user-creation-stats-response.interface';
import { UsersRequest } from '../../interfaces/user-management/models/users/users-request.interface';
import { UsersResponse } from '../../interfaces/user-management/models/users/users-response.interface';
import { ValidatorService } from '../utilities/validator.service';
import {
  PaginationFieldLabels,
  RoleFieldLabels,
  UserFieldLabels,
  ValidationObjectLabels,
} from '../../enums/validation-labels.enum';
import { UserResponse } from '../../interfaces/user-management/models/users/user-response.interface';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * UserService - A service responsible for managing user-related operations,
 * including fetching user state metrics from the backend API.
 */
@Injectable({ providedIn: 'root' })
export class UserService implements IUserService {
  /**
   * Constructs the UserService with necessary dependencies.
   *
   * @param http - Angular's HttpClient used to make HTTP requests to the backend API.
   * @param authHeaderService - Service that builds authentication headers for secure requests.
   * @param validatorService - Service responsible for validating input parameters before making API calls.
   */
  constructor(
    private readonly http: HttpClient,
    private readonly authHeaderService: AuthHeaderService,
    private readonly validatorService: ValidatorService
  ) {}

  /**
   * Retrieves the user state metrics from the backend API.
   * This includes the total count of users, activated users, and deactivated users.
   */
  getUserStateMetrics(): Observable<HttpResponse<UserStateMetricResponse>> {
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.get<UserStateMetricResponse>(
      API_ROUTES.USERS.STATE_METRICS,
      {
        headers,
        observe: 'response',
      }
    );
  }

  /**
   * Retrieves user creation statistics from the backend API.
   * This may include metrics such as the number of users created per day,
   * week, or other time-based trends useful for monitoring user growth.
   */
  getUserCreationStats(): Observable<HttpResponse<UserCreationStatsResponse>> {
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.get<UserCreationStatsResponse>(
      API_ROUTES.USERS.CREATION_STATS,
      {
        headers,
        observe: 'response',
      }
    );
  }

  /**
   * Fetches a paginated list of users with optional filtering.
   *
   * @param request - Object containing pagination info (page, pageSize) and optional filters.
   * @returns Observable of HTTP response containing a list of users and pagination metadata.
   */
  getUsers(request: UsersRequest): Observable<HttpResponse<UsersResponse>> {
    this.validatorService.validateObject(
      request,
      ValidationObjectLabels.UsersRequest
    );
    this.validatorService.validateNumber(
      request.page,
      PaginationFieldLabels.Page,
      1
    );
    this.validatorService.validateNumber(
      request.pageSize,
      PaginationFieldLabels.PageSize,
      1
    );

    const headers = this.authHeaderService.buildAuthHeaders();
    let params = new HttpParams()
      .set('page', request.page.toString())
      .set('pageSize', request.pageSize.toString());

    if (request.accountStatus !== undefined && request.accountStatus !== null) {
      params = params.set('accountStatus', request.accountStatus.toString());
    }

    return this.http.get<UsersResponse>(API_ROUTES.USERS.USERS_BASE, {
      headers,
      params,
      observe: 'response',
    });
  }

  /**
   * Retrieves detailed information about a specific user by ID.
   *
   * @param id - Unique identifier of the user.
   * @returns Observable containing the user's profile data.
   */
  getUserDetails(id: string): Observable<UserResponse> {
    this.validatorService.validateString(id, UserFieldLabels.UserId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.get<UserResponse>(`${API_ROUTES.USERS.USERS_BASE}/${id}`, {
      headers,
    });
  }

  /**
   * Sends a request to delete a user account by their unique identifier.
   * This operation permanently removes the user from the system.
   * Validation is performed on the provided ID before the request is made.
   *
   * @param id - Unique identifier of the user to delete.
   * @returns Observable indicating completion of the deletion operation.
   */
  deleteUser(id: string): Observable<void> {
    this.validatorService.validateString(id, UserFieldLabels.UserId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.delete<void>(`${API_ROUTES.USERS.USERS_BASE}/${id}`, {
      headers,
    });
  }

  /**
   * Sends a request to activate a user account.
   *
   * @param id - Unique identifier of the user to activate.
   * @returns Observable indicating completion of the activation operation.
   */
  activateUser(id: string): Observable<void> {
    this.validatorService.validateString(id, UserFieldLabels.UserId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.patch<void>(
      `${API_ROUTES.USERS.ACTIVATE_USER}/${id}`,
      null,
      {
        headers,
      }
    );
  }

  /**
   * Sends a request to deactivate a user account.
   *
   * @param id - Unique identifier of the user to deactivate.
   * @returns Observable indicating completion of the deactivation operation.
   */
  deactivateUser(id: string): Observable<void> {
    this.validatorService.validateString(id, UserFieldLabels.UserId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.patch<void>(
      `${API_ROUTES.USERS.DEACTIVATE_USER}/${id}`,
      null,
      {
        headers,
      }
    );
  }

  /**
   * Assigns a role to a user by their unique identifier.
   *
   * @param id The unique identifier of the user to whom the role will be assigned.
   * @param roleId The unique identifier of the role to assign to the user.
   * @returns An observable indicating completion of the operation.
   */
  assignRole(id: string, roleId: string): Observable<void> {
    this.validatorService.validateString(id, UserFieldLabels.UserId);
    this.validatorService.validateString(roleId, RoleFieldLabels.RoleId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.post<void>(
      `${API_ROUTES.USERS.USERS_BASE}/${id}/roles/${roleId}`,
      null,
      {
        headers,
      }
    );
  }

  /**
   * Removes a previously assigned role from a user account using their unique identifier.
   * Sends a DELETE request to the corresponding API endpoint to revoke access or privileges.
   *
   * @param id The unique identifier of the user whose role is being removed.
   * @returns An observable indicating completion of the operation.
   */
  removeAssignedRole(id: string): Observable<void> {
    this.validatorService.validateString(id, UserFieldLabels.UserId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.delete<void>(
      `${API_ROUTES.USERS.USERS_BASE}/${id}/roles`,
      {
        headers,
      }
    );
  }
}
