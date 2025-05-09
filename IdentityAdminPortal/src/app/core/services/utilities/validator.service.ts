import { Injectable } from '@angular/core';
import { IValidationService } from '../../interfaces/utilities/validation.service.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * ValidatorService - A utility service that provides runtime validation
 * for strings and numbers. Implements IValidationService.
 */
@Injectable({ providedIn: 'root' })
export class ValidatorService implements IValidationService {
  /**
   * Validates that the provided string is not null, undefined, or empty.
   *
   * @param value - The string value to validate
   * @param name - The name of the field (used in the error message)
   * @throws Error if the value is null, undefined, or empty
   */
  validateString(value: string, name: string): void {
    if (!value || value.trim() === '') {
      throw new Error(`${name} cannot be empty.`);
    }
  }

  /**
   * Validates that the provided number is valid and within the optional bounds.
   *
   * @param value - The number to validate
   * @param name - The name of the field (used in the error message)
   * @param min - Optional minimum allowed value
   * @param max - Optional maximum allowed value
   * @throws Error if the value is not a number, less than min, or greater than max
   */
  validateNumber(
    value: number,
    name: string,
    min?: number,
    max?: number
  ): void {
    if (isNaN(value)) {
      throw new Error(`${name} must be a valid number.`);
    }
    if (min !== undefined && value < min) {
      throw new Error(`${name} must be greater than or equal to ${min}.`);
    }
    if (max !== undefined && value > max) {
      throw new Error(`${name} must be less than or equal to ${max}.`);
    }
  }

  /**
   * Validates that the provided object is not null or undefined.
   *
   * @param object - The object to validate
   * @param name - The name of the object (used in the error message)
   * @throws Error if the object is null or undefined
   */
  validateObject(object: any, name: string): void {
    if (object === null || object === undefined) {
      throw new Error(`${name} cannot be null or undefined.`);
    }
  }
}
