/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * UserService - A service responsible for managing user-related operations,
 * including fetching user state metrics from the backend API.
 */
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_ROUTES } from '../../constants/api-routes.constants';
import { IUserService } from '../../interfaces/user-management/user.service.interface';
import { UserStateMetricResponse } from '../../interfaces/user-management/user-state-metrics-response.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class UserService implements IUserService {
  /**
   * Constructs an instance of UserService.
   *
   * @param http - Angular's HttpClient used to make HTTP requests to the backend API.
   * @param authService - Service responsible for retrieving the current user's authentication token.
   */
  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Retrieves the user state metrics from the backend API.
   * This includes the total count of users, activated users, and deactivated users.
   */
  GetUserStateMetrics(): Observable<HttpResponse<UserStateMetricResponse>> {
    const token = this.authService.getAuthToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<UserStateMetricResponse>(
      API_ROUTES.USERS.STATE_METRICS,
      {
        headers,
        observe: 'response',
      }
    );
  }
}
