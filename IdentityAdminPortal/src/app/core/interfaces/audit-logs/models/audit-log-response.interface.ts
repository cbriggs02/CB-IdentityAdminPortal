import { AuditAction } from '../../../enums/audit-action.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLog - Represents a single audit log entry containing information about a specific event or action.
 */
export interface AuditLog {
  id: string;
  action: AuditAction;
  userId?: string;
  details: string;
  ipAddress: string;
  timeStamp: Date;
}

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLogResponse - Structure for the API response when fetching a audit log.
 */
export interface AuditLogResponse {
  auditLog: AuditLog;
}
