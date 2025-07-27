/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AuthResponse - Interface representing the structure of a successful authentication response.
 * Contains the JWT token returned by the backend upon successful login.
 * Additional fields can be added as needed (e.g., user details, expiration, etc.).
 */
export interface AuthResponse {
  readonly token: string;
}
