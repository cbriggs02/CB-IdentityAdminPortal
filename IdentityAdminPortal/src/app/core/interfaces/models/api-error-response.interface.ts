/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * ApiErrorResponse - A shared interface used across the app to model standard error responses
 * from the backend. Typically includes a status code, optional message, and a list of error details.
 */
export interface ApiErrorResponse {
  statusCode: number;
  message?: string;
  errors?: string[];
}
