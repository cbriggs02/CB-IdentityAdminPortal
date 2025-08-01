import { Component, OnInit } from '@angular/core';
import { AuditLogService } from '../../../core/services/audit-logs/audit-log.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuditLogResponse } from '../../../core/interfaces/audit-logs/models/audit-log-response.interface';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AuditAction } from '../../../core/enums/audit-action.enum';
import { AuditLogTypeLabels } from '../audit-log-type-labels.constant';
import { AppRoutes } from '../../../core/constants/routes/app-routes.constants';
import { ConfirmationService } from '../../../core/services/utilities/confirmation.service';
import { NotificationService } from '../../../core/services/utilities/notification.service';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * AuditLogDetailsComponent - Displays details of a single audit log entry.
 * Allows users to view specific log information and delete the entry if necessary.
 */
@Component({
  selector: 'app-audit-log-details',
  imports: [MatCardModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './audit-log-details.component.html',
  styleUrl: './audit-log-details.component.css',
})
export class AuditLogDetailsComponent implements OnInit {
  logId: string = '';
  logDetails: AuditLogResponse | null = null;

  AuditAction = AuditAction;
  AuditLogTypeLabels = AuditLogTypeLabels;

  auditLogRoute = AppRoutes.AUDIT_LOGS;
  cardSize: string = '';

  /**
   * Constructor for injecting required Angular services.
   *
   * @param route - Provides access to route parameters (e.g. log ID)
   * @param auditLogService - Service for fetching and deleting audit log data
   * @param confirmationService - Service to handle user confirmation dialogs.
   * @param notificationService - Utility service to display user notifications such as success or error messages.
   * @param router - Used for navigation after deleting a log
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly auditLogService: AuditLogService,
    private readonly confirmationService: ConfirmationService,
    private readonly notificationService: NotificationService,
    private readonly router: Router
  ) {}

  /**
   * Lifecycle hook that initializes the component.
   * Retrieves the log ID from the route and fetches its details.
   */
  ngOnInit(): void {
    this.logId = this.route.snapshot.paramMap.get('id')!;
    this.getLogDetails(this.logId);
  }

  /**
   * Fetches the details of a specific audit log entry by ID.
   *
   * @param id - The ID of the audit log to retrieve
   */
  getLogDetails(id: string): void {
    this.auditLogService
      .getLogDetails(id)
      .subscribe((response: AuditLogResponse) => {
        if (!response || !response.auditLog) {
          this.notificationService.showError(
            'Failed to load audit log details.'
          );
          this.logDetails = null;
          return;
        }

        this.logDetails = response;
        if (this.logDetails.auditLog.details.length < 80) {
          this.cardSize = 'extra-small';
        } else if (this.logDetails.auditLog.details.length < 200) {
          this.cardSize = 'small';
        } else {
          this.cardSize = 'normal';
        }
      });
  }

  /**
   * Deletes the specified audit log entry and navigates back to the list view upon success.
   */
  deleteLog(): void {
    const confirmed = this.confirmationService.confirm(
      'Are you sure you want to delete this audit log?'
    );
    if (!confirmed) return;

    this.auditLogService.deleteLog(this.logId).subscribe({
      next: () => {
        this.router.navigate([this.auditLogRoute]);
      },
      error: () => {
        this.notificationService.showError('Failed to delete audit log');
      },
    });
  }
}
