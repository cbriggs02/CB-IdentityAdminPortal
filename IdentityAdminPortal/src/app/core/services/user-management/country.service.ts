import { map, Observable } from 'rxjs';
import { ICountryService } from '../../interfaces/user-management/country.service.interface';
import {
  CountriesResponse,
  Country,
} from '../../interfaces/user-management/models/countries/countries-response.interface';
import { Injectable } from '@angular/core';
import { API_ROUTES } from '../../constants/routes/api-routes.constants';
import { HttpClient } from '@angular/common/http';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * CountryService - Service responsible for retrieving country-related data from the backend API.
 * Typically used to populate country dropdowns or validate country selections in forms.
 */
@Injectable({ providedIn: 'root' })
export class CountryService implements ICountryService {
  /**
   * Constructs the CountryService with the required HttpClient dependency.
   *
   * @param http - Angular's HttpClient used to make HTTP requests to the backend API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Sends an HTTP GET request to retrieve the list of countries from the backend.
   *
   * @returns An observable that emits an array of Country objects.
   */
  getCountries(): Observable<Country[]> {
    return this.http
      .get<CountriesResponse>(API_ROUTES.COUNTRIES)
      .pipe(map((response) => response.countries));
  }
}
