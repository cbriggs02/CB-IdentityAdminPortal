import { Injectable } from '@angular/core';
import { IRoleService } from '../../interfaces/user-management/role.service.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RolesResponse } from '../../interfaces/user-management/models/roles/roles-response.interface';
import { AuthHeaderService } from '../auth/auth-header.service';
import { ValidatorService } from '../utilities/validator.service';
import { API_ROUTES } from '../../constants/routes/api-routes.constants';
import { Role } from '../../interfaces/user-management/models/roles/role.interface';
import { RoleFieldLabels } from '../../enums/validation-labels.enum';
import { RoleResponse } from '../../interfaces/user-management/models/roles/role-response.interface';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * RoleService - Provides methods for retrieving role data from the backend API.
 */
@Injectable({ providedIn: 'root' })
export class RoleService implements IRoleService {
  /**
   * Initializes a new instance of the RoleService class.
   *
   * @param http - Angular's HttpClient used to make HTTP requests to the backend API.
   * @param authHeaderService - Service that builds authentication headers for secure requests.
   * @param validatorService - Service responsible for validating input parameters before making API calls.
   */
  constructor(
    private readonly http: HttpClient,
    private readonly authHeaderService: AuthHeaderService,
    private readonly validatorService: ValidatorService
  ) {}

  /**
   * Retrieves all available roles from the backend API.
   *
   * @returns An observable stream of an array of Role objects.
   */
  getRoles(): Observable<Role[]> {
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http
      .get<RolesResponse>(API_ROUTES.ROLES, {
        headers,
      })
      .pipe(map((response) => response.roles));
  }

  /**
   * Retrieves a specific role by its unique identifier.
   *
   * @param id - The unique identifier of the role to retrieve.
   * @returns An observable stream of a single Role object.
   * @throws Will throw an error if the id is invalid.
   */
  getRole(id: string): Observable<Role> {
    this.validatorService.validateString(id, RoleFieldLabels.RoleId);
    const headers = this.authHeaderService.buildAuthHeaders();
    return this.http
      .get<RoleResponse>(`${API_ROUTES.ROLES}/${id}`, {
        headers,
      })
      .pipe(map((response) => response.role));
  }
}
