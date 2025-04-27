import { CommonApiErrorTypes } from './common-api-error-types.enum';

/**
 * @Author  : Christian Briglio
 * @Created : 2025
 *
 * LoginApiErrorTypes - Enum for categorizing expected error messages returned from the Login API.
 * These error messages are used in the frontend to map errors to user-friendly messages.
 */
export enum LoginApiErrorTypes {
  InvalidCredentials = 'Credentials are invalid.',
  AccountNotActivated = CommonApiErrorTypes.AccountNotActivated,
}
