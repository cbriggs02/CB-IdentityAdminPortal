/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * CLAIMS - An object that holds the claim types used in the JWT token.
 * These claims correspond to the standard claims defined in the identity system
 * and are used to identify key information like the user's roles and unique identifier.
 */
export const CLAIMS = {
  /**
   * The claim type for the user's role.
   * This claim is used to store the roles assigned to the user within the token.
   */
  ROLE: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',

  /**
   * The claim type for the user's unique identifier.
   * This claim stores the user's ID (often referred to as the 'subject' or 'sub') in the token.
   */
  USER_ID:
    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier',
};
