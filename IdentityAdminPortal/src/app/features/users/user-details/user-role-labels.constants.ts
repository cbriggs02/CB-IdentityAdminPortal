import { GlobalRole } from '../../../core/enums/roles.enum';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * UserRoleLabels - Provides user-friendly display names for each role defined in GlobalRole.
 * These labels are typically used in the UI (e.g., dropdowns, role badges, tables) to improve readability.
 */
export const UserRoleLabels: { [key in GlobalRole]: string } = {
  [GlobalRole.SuperAdmin]: 'Super Administrator',
  [GlobalRole.Admin]: 'Administrator',
  [GlobalRole.User]: 'User',
};
