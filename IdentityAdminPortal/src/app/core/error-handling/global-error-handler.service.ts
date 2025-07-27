import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../constants/routes/app-routes.constants';
import { LoggingService } from '../services/utilities/logging.service';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * GlobalErrorHandlerService -
 * Implements Angular's ErrorHandler interface to globally handle unhandled errors within the application.
 * This service logs errors using the LoggingService and redirects the user to an error page if an exception occurs.
 */
@Injectable({ providedIn: 'root' })
export class GlobalErrorHandlerService implements ErrorHandler {
  /**
   * The constructor injects the Router and LoggingService to enable navigation to an error page
   * and logging errors to the console or other logging mechanisms.
   *
   * @param router - Angular Router to navigate to error pages
   * @param loggingService - Service for logging error messages
   */
  constructor(
    private readonly router: Router,
    private readonly loggingService: LoggingService
  ) {}

  /**
   * handleError method is invoked when an unhandled error occurs.
   * It checks the type of error and logs it using the LoggingService.
   * In case the error is an instance of the Error object, the stack trace is also logged.
   * After logging, it navigates the user to a dedicated error page.
   *
   * @param error - The error object or message that was thrown
   */
  handleError(error: any): void {
    if (error instanceof Error) {
      this.loggingService.error(`${error.message}\n${error.stack}`);
    } else {
      this.loggingService.error(error);
    }
    this.router.navigate([AppRoutes.ERROR]);
  }
}
