import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AppRoutes } from '../../constants/routes/app-routes.constants';
import { AppRoles, GlobalRole } from '../../enums/roles.enum';
import { LoggingService } from '../../services/utilities/logging.service';
import { LogLevels } from '../../enums/log-levels.enum';
import { UserContextService } from '../../services/auth/user-context.service';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * RoleGuard - Protects routes by allowing access only to users with specific roles (Admin or SuperAdmin).
 * If the user does not have the required role, they are redirected to the forbidden page.
 */
@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  /**
   * Initializes the RoleGuard with required services.
   *
   * @param userContextService Service responsible for retrieving the current user's role context from the authentication token.
   * @param authService Service responsible for authentication actions such as logout.
   * @param logger Service used for logging informational and warning messages.
   * @param router Angular Router used for navigation upon access denial.
   */
  constructor(
    private readonly userContextService: UserContextService,
    private readonly authService: AuthService,
    private readonly logger: LoggingService,
    private readonly router: Router
  ) {}

  /**
   * Determines whether the current user is authorized to activate the requested route.
   *
   * Retrieves the user's roles from the token service and checks if they match any of the roles
   * specified in the route's data. If the user lacks required roles:
   * - Basic users are logged out and redirected to the login page.
   * - Admin or SuperAdmin users are redirected to the forbidden page without being logged out.
   *
   * @param route The activated route snapshot containing the data with required roles.
   * @returns True if the user has at least one of the required roles; otherwise, false.
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = this.userContextService.getContextRole();
    const requiredRoles: GlobalRole[] = route.data['roles'];

    if (!userRole || userRole == null) {
      this.logActivity('No role found in decoded token.', LogLevels.Info);
      this.logoutAndRedirect();
      return false;
    }

    const isAppUser = userRole ? AppRoles.includes(userRole) : false;
    const hasRequiredRole = userRole ? requiredRoles.includes(userRole) : false;

    if (!hasRequiredRole) {
      if (isAppUser) {
        this.logActivity(
          `Admin user attempted to access restricted page: ${route.routeConfig?.path}.`,
          LogLevels.Warning
        );
        this.redirectToForbidden();
      } else {
        this.logActivity(
          `Basic user attempted to access admin portal.`,
          LogLevels.Warning
        );
        this.logoutAndRedirect();
      }
      return false;
    }
    return true;
  }

  private logoutAndRedirect(): void {
    this.authService.logout();
    this.router.navigate([AppRoutes.LOGIN]);
  }

  private redirectToForbidden(): void {
    this.router.navigate([AppRoutes.FORBIDDEN]);
  }

  private logActivity(message: string, level: LogLevels): void {
    switch (level) {
      case LogLevels.Info:
        this.logger.info(message);
        break;
      case LogLevels.Warning:
        this.logger.warning(message);
        break;
      default:
        this.logger.log(message);
        break;
    }
  }
}
