import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTES } from '../../constants/routes/api-routes.constants';
import { IUserService } from '../../interfaces/user-management/user.service.interface';
import { UserStateMetricResponse } from '../../interfaces/user-management/models/user-state-metrics-response.interface';
import { AuthHeaderService } from '../auth/auth-header.service';
import { UserCreationStatsResponse } from '../../interfaces/user-management/models/user-creation-stats-response.interface';

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
   * Constructor for the UserService.
   *
   * @param http - Injected HttpClient used for making HTTP requests to the backend API.
   * @param authHeaderService - Injected AuthHeaderService used for generating authentication headers
   * for API requests that require authorization.
   */
  constructor(
    private http: HttpClient,
    private authHeaderService: AuthHeaderService
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
}
