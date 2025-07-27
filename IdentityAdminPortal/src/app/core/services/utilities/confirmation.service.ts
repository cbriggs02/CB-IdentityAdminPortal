import { Injectable } from '@angular/core';
import { IConfirmationService } from '../../interfaces/utilities/confirmation.service.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * @description
 * Provides a browser-based confirmation dialog using the native `window.confirm` method.
 * This service is designed to be injected where user confirmation is required before
 * proceeding with an action (e.g., deleting data, submitting a form).
 */
@Injectable({ providedIn: 'root' })
export class ConfirmationService implements IConfirmationService {
  /**
   * Displays a confirmation dialog with the specified message.
   *
   * @param message The message to display in the confirmation dialog.
   * @returns A boolean indicating whether the user confirmed (true) or canceled (false) the action.
   */
  confirm(message: string): boolean {
    return window.confirm(message);
  }
}
