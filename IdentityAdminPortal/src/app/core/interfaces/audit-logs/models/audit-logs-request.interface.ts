import { AuditAction } from '../../../enums/audit-action.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLogsRequest - Represents the structure of a request
 * to retrieve audit log entries with optional filtering.
 */
export interface AuditLogsRequest {
  page: number;
  pageSize: number;
  action?: AuditAction;
}
