import { AuditAction } from '../../../enums/audit-action.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLog - Represents a single audit log entry containing information about a specific event or action.
 */
export interface AuditLog {
  /** Unique identifier for the audit log entry */
  readonly id: string;

  /** The action performed, represented by an AuditAction enum */
  readonly action: AuditAction;

  /** Optional ID of the user who performed the action */
  readonly userId?: string;

  /** Detailed description of the audit event */
  readonly details: string;

  /** IP address from which the action was performed */
  readonly ipAddress: string;

  /** Timestamp when the audit event occurred */
  readonly timeStamp: Date;
}

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLogResponse - Structure for the API response when fetching an audit log.
 */
export interface AuditLogResponse {
  /** The audit log entry returned by the API */
  readonly auditLog: AuditLog;
}
