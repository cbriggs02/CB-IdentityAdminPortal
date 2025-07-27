import { AccountStatus } from '../../core/enums/account-status.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AccountStatusLabels - A mapping between AccountStatus enum values and their corresponding display labels.
 * This object helps ensure consistency in how account statuses are presented across the application,
 * avoiding hardcoded strings and improving maintainability.
 */
export const AccountStatusLabels: { [key in AccountStatus]: string } = {
  [AccountStatus.Active]: 'Active',
  [AccountStatus.Inactive]: 'Inactive',
};
