/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * @description
 * Defines the contract for a notification service that displays user-friendly
 * messages in the form of snackbar/toast notifications.
 */
export interface INotificationService {
  /**
   * Displays a success notification to the user.
   *
   * @param message The message to be shown, typically indicating that an operation was successful.
   */
  showSuccess(message: string): void;

  /**
   * Displays an error notification to the user.
   *
   * @param message The message to be shown, typically indicating a failure or error.
   */
  showError(message: string): void;

  /**
   * Displays an informational notification to the user.
   *
   * @param message The message to be shown, typically conveying general or contextual information.
   */
  showInfo(message: string): void;
}
