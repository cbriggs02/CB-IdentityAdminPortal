/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * ILoggingService - This interface defines the contract for a logging service.
 * It includes methods for logging general messages and errors, which can be implemented in a service to handle logging functionality in different environments (e.g., development, production).
 */
export interface ILoggingService {
  /**
   * Logs a general message. This method can be used for regular logging of information like events, actions, or state changes in the application.
   *
   * @param message - The message to be logged, typically a string that describes the event or information.
   */
  log(message: string): void;

  /**
   * Logs an error message. This method should be used to capture errors or exceptional situations that require special attention.
   * It can be used to track problems, such as failed API requests, exceptions, or user actions leading to errors.
   *
   * @param message - The error message to be logged, typically a string that explains the error or failure.
   */
  error(message: string): void;

  /**
   * Logs an informational message. This method can be used to log general informational events in the application, such as system status or other relevant non-error details.
   *
   * @param message - The informational message to be logged, typically a string with application details.
   */
  info(message: string): void;

  /**
   * Logs a warning message. This method can be used to log potential issues or areas that may require attention but are not critical errors.
   *
   * @param message - The warning message to be logged, typically a string highlighting potential issues or important alerts.
   */
  warning(message: string): void;
}
