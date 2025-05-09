/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AppRoutes - A central location for defining all application routes.
 * Storing routes as constants helps avoid hardcoding URLs throughout the application,
 * promoting consistency and making future updates easier.
 */
export const AppRoutes = {
  /**
   * Route for the Dashboard page.
   * Represents the main page of the application where users can see the overview of their data.
   */
  DASHBOARD: '/dashboards',

  /**
   * Route for the Login page.
   * Users are redirected to this page when they need to log in to the application.
   */
  LOGIN: '/login',

  /**
   * Route for the Error page.
   * This page is shown when an unexpected error occurs in the application.
   */
  ERROR: '/error',

  /**
   * Route for the Unauthorized page.
   * Users are redirected to this page if they attempt to access a restricted area without proper credentials.
   */
  UNAUTHORIZED: '/access-denied',

  /**
   * Route for the Forbidden page.
   * This page is shown when users do not have permission to access a particular resource or page.
   */
  FORBIDDEN: '/forbidden',

  /**
   * Route for the Audit Logs page.
   * Displays a list of audit logs that record key actions taken by users within the application.
   */
  AUDIT_LOGS: '/audit-logs',

  /**
   * Route for viewing the details of a specific audit log entry.
   * Used when inspecting an individual audit record in more detail.
   */
  AUDIT_LOG_DETAILS: '/audit-log',
};
