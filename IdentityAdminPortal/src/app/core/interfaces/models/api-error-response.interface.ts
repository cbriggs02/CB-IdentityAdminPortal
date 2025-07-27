/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * ApiErrorResponse - A shared interface used across the app to model standard error responses
 * from the backend. Typically includes a status code, optional message, and a list of error details.
 */
export interface ApiErrorResponse {
  /** HTTP status code returned by the backend */
  statusCode: number;

  /** Optional human-readable message describing the error */
  message?: string;

  /** Optional array of detailed error messages */
  errors?: string[];
}
