import { Observable } from 'rxjs';
import { UserStateMetricResponse } from './user-state-metrics-response.interface';
import { HttpResponse } from '@angular/common/http';

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
}
