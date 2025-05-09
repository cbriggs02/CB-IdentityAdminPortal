/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * IValidationService - Interface that defines utility methods for validating user input.
 * Helps ensure values meet expected formats or constraints before processing.
 */
export interface IValidationService {
  /**
   * Validates that a string value is not null, undefined, or empty.
   *
   * @param value - The string value to validate.
   * @param name - The name of the field being validated (used for error messaging).
   * @throws Error if the string is invalid.
   */
  validateString(value: string, name: string): void;

  /**
   * Validates that a number is not null or undefined, and optionally
   * checks if it's within the specified min and max range.
   *
   * @param value - The number to validate.
   * @param name - The name of the field being validated (used for error messaging).
   * @param min - Optional minimum allowed value.
   * @param max - Optional maximum allowed value.
   * @throws Error if the number is invalid or outside the specified range.
   */
  validateNumber(value: number, name: string, min?: number, max?: number): void;

  /**
   * Validates that the provided object is not null or undefined.
   *
   * @param object - The object to validate.
   * @param name - The name of the field being validated (used for error messaging).
   * @throws Error if the object is null or undefined.
   */
  validateObject(object: any, name: string): void;
}
