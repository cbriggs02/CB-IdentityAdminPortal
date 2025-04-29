/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * Enum representing the various levels of logging severity.
 */
export enum LogLevels {
  /**
   * Represents an error log level.
   * Typically used for critical issues that require immediate attention.
   */
  Error = 'error',

  /**
   * Represents an informational log level.
   * Used for general information about the application's flow and state.
   */
  Info = 'info',

  /**
   * Represents a warning log level.
   * Used to indicate potentially problematic situations that are not errors but should be monitored.
   */
  Warning = 'warn',
}
