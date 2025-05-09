import { Component, OnInit } from '@angular/core';
import { AuditLogService } from '../../../core/services/audit-logs/audit-log.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuditLogResponse } from '../../../core/interfaces/audit-logs/models/audit-log-response.interface';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AuditAction } from '../../../core/enums/audit-action.enum';
import { AuditLogTypeLabels } from '../audit-log-type-labels.constant';
import { AppRoutes } from '../../../core/constants/routes/app-routes.constants';

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
   * @param router - Used for navigation after deleting a log
   */
  constructor(
    private route: ActivatedRoute,
    private auditLogService: AuditLogService,
    private router: Router
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
    this.auditLogService.deleteLog(this.logId).subscribe({
      next: () => {
        this.router.navigate([this.auditLogRoute]);
      },
    });
  }
}
