import { HttpHeaders } from '@angular/common/http';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * IAuthHeaderService - Interface for defining the contract of a service
 * responsible for building HTTP authorization headers.
 * This service will be used by other services that require authentication
 * headers for API calls.
 */
export interface IAuthHeaderService {
  /**
   * Builds and returns the HTTP headers for an authenticated request.
   * This method constructs an `Authorization` header with a bearer token
   * retrieved from an authentication service (e.g., AuthService).
   * If no token is available, an error will be thrown.
   */
  buildAuthHeaders(): HttpHeaders;
}
