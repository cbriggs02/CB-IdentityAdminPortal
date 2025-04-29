/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * ITokenService - Interface for handling operations related to JWT tokens.
 * Provides methods to extract and decode token data from session storage.
 */
export interface ITokenService {
  /**
   * Gets the user's unique identifier from the decoded token.
   * @returns The user ID (subject) or null if not found.
   */
  getUserId(): string | null;

  /**
   * Gets the user's roles from the decoded token.
   * @returns An array of roles. Empty array if not present.
   */
  getUserRoles(): string[];

  /**
   * Checks whether the current authentication token is expired.
   * It compares the token's expiration time (`exp`) with the current date and time.
   *
   * @returns True if the token is expired or invalid (e.g., no expiration date),
   * false if the token is still valid.
   */
  isTokenExpired(): boolean;
}

/**
 * DecodedToken - Represents the structure of a decoded JWT token.
 * The token includes a unique subject identifier (`sub`), roles (`role`), and potentially other dynamic claims.
 *
 * - `sub`: The unique identifier of the user (typically the user ID).
 * - `role`: The user's role(s), which could be a single role or an array of roles.
 * - `[key: string]`: An index signature to allow any additional claims in the token, which will be either a string or an array of strings.
 *
 * This interface provides a flexible way to access standard claims as well as any custom claims that may exist in the JWT.
 */
export interface DecodedToken {
  sub: string;
  role?: string[] | string;
  exp: number;
  [key: string]: string | string[] | number | undefined;
}
