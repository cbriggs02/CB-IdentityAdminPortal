import { AppRoutes } from './routes/app-routes.constants';
import { HttpStatusCode } from '../enums/http-status-code.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * ErrorRouteMap - Defines a centralized mapping between specific HTTP status codes
 * and their corresponding error handling routes in the application. This abstraction
 * improves maintainability by avoiding hardcoded route strings throughout the codebase.
 */
export const ErrorRouteMap: Record<HttpStatusCode, string> = {
  /**
   * Redirect route for 401 Unauthorized errors
   * (e.g., user not authenticated)
   */
  [HttpStatusCode.Unauthorized]: AppRoutes.UNAUTHORIZED,

  /**
   * Redirect route for 403 Forbidden errors
   * (e.g., user lacks permissions)
   */
  [HttpStatusCode.Forbidden]: AppRoutes.FORBIDDEN,

  /**
   * Redirect route for 500 Internal Server errors
   * (e.g., unexpected server-side issues)
   */
  [HttpStatusCode.InternalServerError]: AppRoutes.ERROR,
};
