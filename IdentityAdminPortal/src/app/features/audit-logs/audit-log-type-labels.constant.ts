import { AuditAction } from '../../core/enums/audit-action.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuditLogTypeLabels - A mapping of audit action enum values to their corresponding human-readable labels.
 * This is used to display understandable descriptions in the UI or logs for each audit event type.
 */
export const AuditLogTypeLabels: { [key in AuditAction]: string } = {
  [AuditAction.AuthorizationBreach]: 'Authorization Breach',
  [AuditAction.Exception]: 'Unhandled Exception',
  [AuditAction.SlowPerformance]: 'Slow Performance Issue',
};
