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
}
/**
 * DecodedToken - Interface for the decoded token payload structure.
 * Represents the claims in a decoded JWT token.
 *
 * @property sub - The subject claim, typically representing the user ID.
 * @property role - The role(s) of the user, which can be a single role as a string or an array of roles.
 */
export interface DecodedToken {
  sub: string;
  role?: string[] | string;
}
