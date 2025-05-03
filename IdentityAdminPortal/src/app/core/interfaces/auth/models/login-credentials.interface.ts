/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * LoginCredentials - Represents the credentials required for user login.
 * This interface defines the structure of the data containing the user's
 * username and password that will be sent to the authentication service
 * for verification during the login process.
 */
export interface LoginCredentials {
  username: string;
  password: string;
}
