import { AuditAction } from '../../../enums/audit-action.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLogsRequest - Represents the structure of a request
 * to retrieve audit log entries with optional filtering.
 */
export interface AuditLogsRequest {
  /** The page number to retrieve (for pagination) */
  page: number;

  /** The number of audit log entries per page */
  pageSize: number;

  /** Optional filter to retrieve audit logs by a specific action type */
  action?: AuditAction;
}
