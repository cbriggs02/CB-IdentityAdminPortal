import { Observable } from 'rxjs';
import { AuditLogsRequest } from './models/audit-logs-request.interface';
import { HttpResponse } from '@angular/common/http';
import { AuditLogsResponse } from './models/audit-logs-response.interface';
import { AuditLogResponse } from './models/audit-log-response.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * IAuditLogService - Interface defining the contract for an audit log service.
 * Provides a method to retrieve audit logs based on request parameters and delete audit logs.
 */
export interface IAuditLogService {
  /**
   * Retrieves audit logs based on the provided request filters and options.
   *
   * @param request - An object containing filtering, sorting, and pagination options.
   */
  getLogs(
    request: AuditLogsRequest
  ): Observable<HttpResponse<AuditLogsResponse>>;

  /**
   * Retrieves the details of a specific audit log entry by its ID.
   *
   * @param id - The unique identifier of the audit log entry.
   */
  getLogDetails(id: string): Observable<AuditLogResponse>;

  /**
   * Deletes a specific audit log entry by its ID.
   *
   * @param id - The unique identifier of the audit log entry to delete.
   */
  deleteLog(id: string): Observable<void>;
}
