import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { INotificationService } from '../../interfaces/utilities/notification.service.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * @description
 * Provides snackbar-based notification messages to inform the user about success, error,
 * or informational events.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService implements INotificationService {
  /**
   * Initializes the notification service with the Angular Material snackbar instance.
   *
   * @param snackBar The injected MatSnackBar service used to display messages.
   */
  constructor(private readonly snackBar: MatSnackBar) {}

  /**
   * Displays a success message using a green-themed snackbar.
   *
   * @param message The success message to display to the user.
   */
  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      panelClass: ['snackbar-success'],
      duration: 3000,
    });
  }

  /**
   * Displays an error message using a red-themed snackbar.
   *
   * @param message The error message to display to the user.
   */
  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      panelClass: ['snackbar-error'],
      duration: 5000,
    });
  }

  /**
   * Displays an informational message using a blue-themed snackbar.
   *
   * @param message The informational message to display to the user.
   */
  showInfo(message: string): void {
    this.snackBar.open(message, 'Close', {
      panelClass: ['snackbar-info'],
      duration: 4000,
    });
  }
}
