/**
 * @Author  : Christian Briglio
 * @Created : 2025
 *
 * ApiErrorTypes - Enum for categorizing expected error messages returned from the backend API.
 * These error messages are used in the frontend to map errors to user-friendly messages.
 */
export enum ApiErrorTypes {
  // Login API Errors
  InvalidCredentials = 'Credentials are invalid.',
  AccountAlreadyActivated = 'User account is already activated.',
}
