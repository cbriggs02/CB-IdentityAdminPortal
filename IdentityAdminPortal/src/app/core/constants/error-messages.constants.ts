/**
 * @Author  : Christian Briglio
 * @Created : 2025
 *
 * ErrorMessages - A centralized collection of common user-facing error messages.
 * These messages provide consistent feedback in the UI across authentication and general workflows.
 */
export const ErrorMessages = {
  /**
   * Auth - Error messages related to user authentication,
   * such as login failures and account access issues.
   */
  Auth: {
    /**
     * Shown when a user enters an incorrect username or password.
     */
    InvalidCredentials: 'Invalid username or password.',

    /**
     * Shown when a user tries to log in but their account has not yet been activated.
     */
    AccountNotActivated:
      'Your account is not activated. Please contact support.',

    /**
     * Shown when no account is found with the provided username.
     */
    UserNotFound: 'User not found. Please check your username.',
  },

  /**
   * Common - General-purpose fallback error messages for unexpected failures.
   */
  Common: {
    /**
     * Shown when an unknown error occurs and no specific message is available.
     */
    UnknownError: 'An unexpected error occurred. Please try again later.',
  },
};
