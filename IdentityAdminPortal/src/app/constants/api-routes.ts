/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * API_ROUTES - A configuration file that contains all the API endpoints used by the application.
 * It centralizes all API routes so they can be easily managed and modified.
 *
 * Dependencies:
 * - environment: Provides the base API URL for the application, depending on the environment (e.g., development, production).
 */
import { environment } from '../../environments/environment';

export const API_ROUTES = {

  /**
   * LOGIN - The route for logging in and obtaining authentication tokens.
   * This endpoint allows the frontend to send login credentials and receive a token for further authentication.
   *
   * Usage:
   * - The URL is dynamically constructed using the `apiBaseUrl` from the environment configuration.
   * - It appends the `/api/v1/Login/tokens` path to the base API URL.
   */
  LOGIN: `${environment.apiBaseUrl}/api/v1/Login/tokens`,
};
