/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * LoginCredentials - A class that represents the login credentials for a user.
 * This class is used to encapsulate the username and password that will be sent
 * to the authentication API for user login.
 */
export class LoginCredentials {
  /**
   * Constructor to initialize the login credentials.
   * This constructor creates a new instance of the LoginCredentials class,
   * which contains the user's username and password for authentication purposes.
   *
   * @param username - The username of the user trying to log in.
   * @param password - The password of the user trying to log in.
   */
  constructor(public username: string, public password: string) {}
}
