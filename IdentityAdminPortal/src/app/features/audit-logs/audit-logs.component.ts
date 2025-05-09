import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { SimplifiedAuditLog } from '../../core/interfaces/audit-logs/models/audit-logs-response.interface';
import { AuditLogService } from '../../core/services/audit-logs/audit-log.service';
import { AuditAction } from '../../core/enums/audit-action.enum';
import { AuditLogTypeLabels } from './audit-log-type-labels.constant';
import { AuditLogsRequest } from '../../core/interfaces/audit-logs/models/audit-logs-request.interface';
import { AppRoutes } from '../../core/constants/routes/app-routes.constants';
import { Router } from '@angular/router';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * AuditLogsComponent - Displays a list of audit logs with pagination and filtering capabilities.
 * Allows users to view log details or filter logs based on action type.
 */
@Component({
  selector: 'app-audit-logs',
  imports: [CommonModule, MatPaginatorModule, MatTableModule, MatSelectModule],
  standalone: true,
  templateUrl: './audit-logs.component.html',
  styleUrl: './audit-logs.component.css',
})
export class AuditLogsComponent implements OnInit {
  dataSource: SimplifiedAuditLog[] = [];

  AuditAction = AuditAction;
  actionLabels: { [key: number]: string } = AuditLogTypeLabels;
  selectedAction?: AuditAction;

  actionKeys: number[] = Object.keys(this.actionLabels).map((k) => +k);
  displayedColumns: string[] = ['id', 'action', 'timeStamp', 'manage'];

  page = 1;
  pageSize = 10;
  totalItems = 0;

  /**
   * Constructor to inject services used by the component.
   *
   * @param auditLogService - Service to fetch audit log data.
   * @param router - Angular Router used to navigate to log details.
   */
  constructor(
    private auditLogService: AuditLogService,
    private router: Router
  ) {}

  /**
   * Lifecycle method that runs when the component initializes.
   * Triggers the initial fetch of audit logs.
   */
  ngOnInit(): void {
    this.fetchAuditLogs();
  }

  /**
   * Fetches audit logs from the service based on the current filter and pagination state.
   */
  fetchAuditLogs(): void {
    const request: AuditLogsRequest = {
      page: this.page,
      pageSize: this.pageSize,
      action: this.selectedAction,
    };

    this.auditLogService.getLogs(request).subscribe((response) => {
      this.dataSource = response.body?.logs ?? [];
      this.totalItems = response.body?.paginationMetadata?.totalCount ?? 0;
    });
  }

  /**
   * Event handler for when the user selects a different audit action filter.
   *
   * @param action - The selected action as a string. Empty string clears the filter.
   */
  onActionChange(action: string): void {
    this.selectedAction = action === '' ? undefined : +action;
    this.page = 1;
    this.fetchAuditLogs();
  }

  /**
   * Navigates to the audit log detail page for the specified log entry.
   *
   * @param id - The ID of the audit log to view.
   */
  viewLog(id: string): void {
    this.router.navigate([`${AppRoutes.AUDIT_LOG_DETAILS}/${id}`]);
  }

  /**
   * Event handler for when the pagination controls are used.
   * Updates the current page and page size and fetches new data.
   *
   * @param event - The pagination event containing new page index and size.
   */
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.fetchAuditLogs();
  }
}
