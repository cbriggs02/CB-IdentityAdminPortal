import { AuditAction } from '../../../enums/audit-action.enum';
import { PaginationResponse } from '../../models/pagination-response.interface';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * SimplifiedAuditLog - Represents a simplified version of an audit log entry,
 * containing essential fields such as the log's ID, action, and timestamp.
 */
export interface SimplifiedAuditLog {
  /** Unique identifier of the audit log entry */
  readonly id: string;

  /** The action performed that generated this audit log */
  readonly action: AuditAction;

  /** Timestamp indicating when the audit log was recorded */
  readonly timeStamp: Date;
}

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLogsResponse - Structure for the API response when fetching a list of audit logs.
 * Includes the list of logs and pagination metadata.
 */
export interface AuditLogsResponse {
  /** Array of simplified audit log entries */
  readonly logs: SimplifiedAuditLog[];

  /** Pagination information for the response */
  readonly paginationMetadata: PaginationResponse;
}
