import { Injectable } from '@angular/core';
import { ILoggingService } from '../interfaces/logging.service.interface';
import { environment } from '../../../environments/environment';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * LoggingService - Implements the ILoggingService interface to provide logging functionality.
 * This service is responsible for logging messages and errors, but it only logs in the development environment.
 * In production, logging is disabled to prevent exposure of sensitive information.
 */
@Injectable({ providedIn: 'root' })
export class LoggingService implements ILoggingService {
  /**
   * Logs a general message. This method is used to log informational messages during the development phase.
   * In production, this method will not log anything to avoid unnecessary console outputs.
   *
   * @param message - The message to be logged, typically a string describing the event or information.
   */
  log(message: string): void {
    if (!environment.production) {
      console.log(message);
    }
  }

  /**
   * Logs an error message. This method is used to capture error messages and exceptions during the development phase.
   * In production, this method will not log anything to avoid exposing errors.
   *
   * @param message - The error message to be logged, typically a string describing the error or failure.
   */
  error(message: string): void {
    if (!environment.production) {
      console.error(message);
    }
  }

  /**
   * Logs an informational message. This method is used to log general info during the development phase.
   * In production, it will not log anything to prevent unnecessary logs.
   *
   * @param message - The informational message to be logged, typically a string with application details.
   */
  info(message: string): void {
    if (!environment.production) {
      console.info(message);
    }
  }

  /**
   * Logs a warning message. This method is used to capture potential issues that may require attention but are not critical.
   * In production, this method will not log anything to avoid exposing unnecessary warnings.
   *
   * @param message - The warning message to be logged, typically a string highlighting potential issues.
   */
  warning(message: string): void {
    if (!environment.production) {
      console.warn(message);
    }
  }
}
