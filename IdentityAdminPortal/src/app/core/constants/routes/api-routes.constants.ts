import { environment } from '../../../../environments/environment';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * API_ROUTES - A configuration file that contains all the API endpoints used by the application.
 * It centralizes all API routes so they can be easily managed and modified.
 */
export const API_ROUTES = {
  /**
   * LOGIN - The route for logging in and obtaining authentication tokens.
   * This endpoint allows the frontend to send login credentials and receive a token for further authentication.
   */
  LOGIN: `${environment.apiBaseUrl}/api/${environment.apiVersion}/Login/tokens`,

  /**
   * USERS - Grouping of all user-related API endpoints.
   * Encapsulates routes pertaining to user operations for better organization.
   */
  USERS: {
    // METRICS - Endpoint to retrieve user state metrics.
    STATE_METRICS: `${environment.apiBaseUrl}/api/${environment.apiVersion}/users/state-metrics`,
  },
};
