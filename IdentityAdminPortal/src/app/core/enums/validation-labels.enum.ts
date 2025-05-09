/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * ValidationFieldLabels - Enum that holds constant string values representing the names of individual form fields
 * or input fields used in validation across the application.
 * This enum centralizes the labeling of common field names, ensuring consistency and reducing
 * the risk of errors due to hardcoded strings in validation-related messages or code.
 */
export enum ValidationFieldLabels {
  AuditLogId = 'Audit log ID',
  Page = 'Page',
  PageSize = 'Page Size',
  UserName = 'User Name',
  Password = 'Password',
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
}
