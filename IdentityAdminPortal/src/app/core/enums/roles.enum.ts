/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * Role - Represents the available user roles within the application.
 * These roles are used to control access to protected areas of the system.
 */
export enum Role {
  /**
   * Admin - Represents a user with administrative privileges.
   * Admins typically have access to management and maintenance features.
   */
  Admin = 'Admin',

  /**
   * SuperAdmin - Represents a user with the highest level of privileges.
   * SuperAdmins have full control over the system, including administrative and security-related functions.
   */
  SuperAdmin = 'SuperAdmin',
}
