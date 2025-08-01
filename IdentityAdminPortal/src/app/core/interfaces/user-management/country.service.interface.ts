import { Observable } from 'rxjs';
import { Country } from './models/countries/countries-response.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * ICountryService - Interface for interacting with country-related data sources,
 * typically used to fetch a list of countries for selection in forms or settings.
 */
export interface ICountryService {
  /**
   * Retrieves an observable stream containing a list of countries.
   *
   * @returns An observable that emits an array of Country objects.
   */
  getCountries(): Observable<Country[]>;
}
