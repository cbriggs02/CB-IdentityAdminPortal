/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * GlobalRole - Defines all available user roles recognized across the platform.
 * These roles are used to control access to features and resources in various applications.
 */
export enum GlobalRole {
  /**
   * User - Standard user with limited access to basic functionality.
   */
  User = 'User',

  /**
   * Admin - Application-level administrator with elevated permissions.
   */
  Admin = 'Admin',

  /**
   * SuperAdmin - Platform-wide administrator with full system privileges.
   */
  SuperAdmin = 'SuperAdmin',
}

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AppRoles - Specifies the subset of roles used specifically within the admin application.
 * These roles are extracted from the GlobalRole enum and define access boundaries for administrative features.
 */
export const AppRoles: GlobalRole[] = [GlobalRole.Admin, GlobalRole.SuperAdmin];
