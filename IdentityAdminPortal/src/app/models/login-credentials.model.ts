/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * LoginCredentials - A class that represents the login credentials for a user.
 * This class is used to encapsulate the username and password that will be sent
 * to the authentication API for user login.
 *
 * Usage:
 * - This class is typically used when sending login credentials from the frontend
 *   to the backend for user authentication.
 * - The `username` and `password` are stored as public properties and are passed
 *   into the constructor when creating a new instance of this class.
 */
export class LoginCredentials {
  constructor(
    public username: string,
    public password: string
  ) {}
}
