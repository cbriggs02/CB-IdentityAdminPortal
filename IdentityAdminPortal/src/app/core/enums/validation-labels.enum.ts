/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserFieldLabels - Enum that holds string constants for field names related to user-specific input or form fields.
 * These values are used throughout the application in validation logic, ensuring consistency
 * when referring to user-related fields in error messages or UI elements.
 */
export enum UserFieldLabels {
  UserId = 'User ID',
  UserName = 'User Name',
  Password = 'Password',
}

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * AuditLogFieldLabels - Enum that holds string constants for field names related to audit log inputs or filters.
 * This helps maintain consistent labeling across validations and log-related forms.
 */
export enum AuditLogFieldLabels {
  AuditLogId = 'Audit log ID',
}

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * RoleFieldLabels - Enum that holds string constants for role-related fields, commonly used in validation.
 * Provides clarity and consistency in UI labels and error messaging for role management.
 */
export enum RoleFieldLabels {
  RoleId = 'Role ID',
  RoleName = 'Role Name',
}

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * PaginationFieldLabels - Enum that defines constant string values for pagination-related fields.
 * Centralizing these labels ensures consistency in UI messages and backend validation related to pagination.
 */
export enum PaginationFieldLabels {
  Page = 'Page',
  PageSize = 'Page Size',
}

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * ValidationObjectLabels - Enum that holds constant string values representing the names of validation objects
 * used for more complex validation scenarios, typically where an object or group of fields
 * are validated together.
 * This enum provides a naming convention for such objects, ensuring consistency
 * when handling error messages related to an entire object or group of fields.
 */
export enum ValidationObjectLabels {
  LoginCredentials = 'Login Credentials',
  AuditLogsRequest = 'Audit Logs List Request',
  UsersRequest = 'Users List Request',
}
