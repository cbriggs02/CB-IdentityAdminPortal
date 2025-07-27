import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuditLogService } from '../../interfaces/audit-logs/audit-log.service.interface';
import { AuditLogsRequest } from '../../interfaces/audit-logs/models/audit-logs-request.interface';
import { AuditLogsResponse } from '../../interfaces/audit-logs/models/audit-logs-response.interface';
import { Injectable } from '@angular/core';
import { AuthHeaderService } from '../auth/auth-header.service';
import { API_ROUTES } from '../../constants/routes/api-routes.constants';
import { AuditLogResponse } from '../../interfaces/audit-logs/models/audit-log-response.interface';
import { ValidatorService } from '../utilities/validator.service';
import {
  AuditLogFieldLabels,
  PaginationFieldLabels,
  ValidationObjectLabels,
} from '../../enums/validation-labels.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLogService - A concrete implementation of IAuditLogService.
 * Responsible for all audit log operations.
 */
@Injectable({ providedIn: 'root' })
export class AuditLogService implements IAuditLogService {
  /**
   * Initializes a new instance of the AuditLogService.
   *
   * @param http - Angular HttpClient for making HTTP requests
   * @param authHeaderService - Service that provides authorization headers
   * @param validatorService - Utility service for validating request inputs
   */
  constructor(
    private readonly http: HttpClient,
    private readonly authHeaderService: AuthHeaderService,
    private readonly validatorService: ValidatorService
  ) {}

  /**
   * Retrieves audit logs from the backend API based on the specified request parameters.
   *
   * @param request - An object containing page, pageSize, and optional action filter.
   * @returns An Observable emitting an HttpResponse that contains the audit logs response data.
   */
  getLogs(
    request: AuditLogsRequest
  ): Observable<HttpResponse<AuditLogsResponse>> {
    this.validatorService.validateObject(
      request,
      ValidationObjectLabels.AuditLogsRequest
    );
    this.validatorService.validateNumber(
      request.page,
      PaginationFieldLabels.Page,
      1
    );
    this.validatorService.validateNumber(
      request.pageSize,
      PaginationFieldLabels.PageSize,
      1
    );

    const headers = this.authHeaderService.buildAuthHeaders();
    let params = new HttpParams()
      .set('page', request.page.toString())
      .set('pageSize', request.pageSize.toString());

    if (request.action !== undefined && request.action !== null) {
      params = params.set('action', request.action.toString());
    }

    return this.http.get<AuditLogsResponse>(API_ROUTES.AUDIT_LOGS, {
      headers,
      params,
      observe: 'response',
    });
  }

  /**
   * Retrieves the details of a specific audit log by its ID.
   *
   * @param id - Unique identifier of the audit log
   * @returns Observable emitting the AuditLogResponse object
   */
  getLogDetails(id: string): Observable<AuditLogResponse> {
    this.validatorService.validateString(id, AuditLogFieldLabels.AuditLogId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.get<AuditLogResponse>(`${API_ROUTES.AUDIT_LOGS}/${id}`, {
      headers,
    });
  }

  /**
   * Deletes a specific audit log entry by its ID.
   *
   * @param id - Unique identifier of the audit log to delete
   * @returns Observable that completes when the deletion is successful
   */
  deleteLog(id: string): Observable<void> {
    this.validatorService.validateString(id, AuditLogFieldLabels.AuditLogId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http.delete<void>(`${API_ROUTES.AUDIT_LOGS}/${id}`, {
      headers,
    });
  }
}
