/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * @description
 * Defines the contract for a confirmation service, which prompts the user to confirm an action.
 * This interface is implemented using native browser dialogs.
 */
export interface IConfirmationService {
  /**
   * Prompts the user to confirm or cancel an action.
   *
   * @param message The message to display to the user in the confirmation prompt.
   * @returns A boolean indicating whether the user confirmed (true) or canceled (false) the action.
   */
  confirm(message: string): boolean;
}
