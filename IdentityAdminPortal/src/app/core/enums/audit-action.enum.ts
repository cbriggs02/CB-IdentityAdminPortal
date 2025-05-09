/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditAction - Enum representing different types of audit actions that can be logged.
 * Each action corresponds to a specific type of event that is captured in audit logs.
 */
export enum AuditAction {
  /**
   * Represents an authorization breach, typically when an unauthorized action is attempted.
   */
  AuthorizationBreach = 0,

  /**
   * Represents an unhandled exception or error that occurs during the application's operation.
   */
  Exception = 1,

  /**
   * Represents a performance issue, such as slow response times or long-running operations.
   */
  SlowPerformance = 2,
}
