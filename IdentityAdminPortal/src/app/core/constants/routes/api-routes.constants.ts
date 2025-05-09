import { environment } from '../../../../environments/environment';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * APIS - A constant object holding key endpoint paths for the API.
 * Each property represents a different API route used throughout the application.
 */
export const APIS = {
  USERS: 'Users',
  LOGIN: 'Login',
  AUDIT_LOGS: 'AuditLogs',
  PASSWORD: 'Password',
  ROLE: 'Roles',
  COUNTRIES: 'Countries',
} as const;

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * API_ROUTES - A configuration file that contains all the API endpoints used by the application.
 * It centralizes all API routes so they can be easily managed and modified.
 */
export const API_ROUTES = {
  /**
   * LOGIN - Grouping of all login-related API endpoints.
   * Encapsulates routes for user authentication and token management.
   */
  LOGIN: {
    TOKENS: `${environment.apiBaseUrl}/api/${environment.apiVersion}/${APIS.LOGIN}/tokens`,
  },

  /**
   * USERS - Grouping of all user-related API endpoints.
   * Encapsulates routes pertaining to user operations for better organization.
   */
  USERS: {
    STATE_METRICS: `${environment.apiBaseUrl}/api/${environment.apiVersion}/${APIS.USERS}/state-metrics`,
    CREATION_STATS: `${environment.apiBaseUrl}/api/${environment.apiVersion}/${APIS.USERS}/creation-stats`,
  },

  /**
   * AUDIT_LOGS - Endpoint for accessing audit log entries.
   */
  AUDIT_LOGS: `${environment.apiBaseUrl}/api/${environment.apiVersion}/${APIS.AUDIT_LOGS}`,
};
