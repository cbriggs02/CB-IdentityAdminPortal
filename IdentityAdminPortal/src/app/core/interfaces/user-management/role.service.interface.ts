import { Observable } from 'rxjs';
import { Role } from './models/roles/role.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * IRoleService - Interface defining methods for fetching role data.
 */
export interface IRoleService {
  /**
   * Retrieves all roles in the system.
   */
  getRoles(): Observable<Role[]>;

  /**
   * Retrieves a specific role by its unique identifier.
   */
  getRole(id: string): Observable<Role>;
}
