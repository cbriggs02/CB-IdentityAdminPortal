/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * API_ROUTES - A configuration file that contains all the API endpoints used by the application.
 * It centralizes all API routes so they can be easily managed and modified.
 */
import { environment } from '../../environments/environment';

export const API_ROUTES = {
  /**
   * LOGIN - The route for logging in and obtaining authentication tokens.
   * This endpoint allows the frontend to send login credentials and receive a token for further authentication.
   */
  LOGIN: `${environment.apiBaseUrl}/api/v1/Login/tokens`,
};
