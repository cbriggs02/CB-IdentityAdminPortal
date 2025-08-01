/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * Country - Represents a country with a unique identifier and display name.
 */
export interface Country {
  /** Unique numeric identifier for the country. */
  readonly id: number;

  /** Human-readable name of the country (e.g., "Canada", "France"). */
  readonly name: string;
}

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * CountriesResponse - Response model returned from the API when fetching a list of countries.
 */
export interface CountriesResponse {
  /** Array of available countries retrieved from the server. */
  readonly countries: Country[];
}
