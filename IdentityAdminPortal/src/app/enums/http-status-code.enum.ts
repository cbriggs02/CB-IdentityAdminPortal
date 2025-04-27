/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * HttpStatusCode - Enum representing commonly handled HTTP status codes.
 * This enum helps provide type safety and improves readability when checking
 * response status codes in global error handling logic (e.g., in interceptors).
 */
export enum HttpStatusCode {
  /**
   * 401 Unauthorized - Indicates that the request has not been applied
   * because it lacks valid authentication credentials for the target resource.
   * Commonly used when a user needs to be logged in.
   */
  Unauthorized = 401,

  /**
   * 403 Forbidden - The server understands the request but refuses to authorize it.
   * This is typically used when the user is authenticated but does not have the
   * necessary permissions to access the resource.
   */
  Forbidden = 403,

  /**
   * 500 Internal Server Error - A generic error message, given when
   * an unexpected condition was encountered on the server.
   * Often used as a fallback route for unhandled server-side exceptions.
   */
  InternalServerError = 500,
}
