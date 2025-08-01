import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AppRoutes } from '../../../core/constants/routes/app-routes.constants';
import { UserResponse } from '../../../core/interfaces/user-management/models/users/user-response.interface';
import { UserService } from '../../../core/services/user-management/user.service';
import { ConfirmationService } from '../../../core/services/utilities/confirmation.service';
import { UserRoleLabels } from './user-role-labels.constants';
import { MatSelectModule } from '@angular/material/select';
import { AccountStatus } from '../../../core/enums/account-status.enum';
import { AccountStatusLabels } from '../account-status-labels.constant';
import { Role } from '../../../core/interfaces/user-management/models/roles/role.interface';
import { RoleService } from '../../../core/services/user-management/role.service';
import { FormsModule } from '@angular/forms';
import { GlobalRole } from '../../../core/enums/roles.enum';
import { LoggingService } from '../../../core/services/utilities/logging.service';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { NotificationService } from '../../../core/services/utilities/notification.service';
import { UserContextService } from '../../../core/services/auth/user-context.service';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserDetailsComponent - A component responsible for displaying detailed information
 * about a specific user and providing actions such as deleting the user.
 * It retrieves the user ID from the route and fetches the user's data on initialization.
 */
@Component({
  selector: 'app-user-details',
  imports: [
    MatCardModule,
    CommonModule,
    RouterModule,
    MatSelectModule,
    FormsModule,
  ],
  standalone: true,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  userId = '';
  userDetails: UserResponse | null = null;
  readonly userRoute = AppRoutes.USERS;

  roles: Role[] = [];
  userRoleLabels = UserRoleLabels;
  selectedRoleId: string | null = null;

  AccountStatus = AccountStatus;
  accountStatusLabels: { [key: number]: string } = AccountStatusLabels;
  selectedStatus: AccountStatus | null = null;
  statusKeys: number[] = Object.keys(this.accountStatusLabels).map((k) => +k);

  userContextRole: GlobalRole | null = null;

  /**
   * Determines whether the "Save" button should be disabled.
   * The button is disabled if:
   *  - User details are not loaded, or
   *  - Neither the selected role nor the selected status have changed from the
   *    current user's role and status.
   *
   * @returns True if no changes detected or user data missing; otherwise, false.
   */
  get isSaveDisabled(): boolean {
    if (!this.userDetails?.user) return true;
    return (
      this.selectedRoleId === this.userDetails.user.roleId &&
      this.selectedStatus === this.userDetails.user.accountStatus
    );
  }

  /**
   * Constructs the UserDetailsComponent with required services.
   *
   * @param route - ActivatedRoute to extract route parameters.
   * @param userService - Service responsible for user-related API operations.
   * @param roleService - Service to retrieve available system roles.
   * @param tokenService - Service for accessing token and user role claims.
   * @param loggerService - Logging service for error reporting and debugging.
   * @param confirmationService - Service to handle user confirmation dialogs.
   * @param notificationService - Utility service to display user notifications such as success or error messages.
   * @param userContextService - Service responsible for retrieving the current user's role context from the authentication token.
   * @param router - Router service to navigate between application routes.
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
    private readonly roleService: RoleService,
    private readonly loggerService: LoggingService,
    private readonly confirmationService: ConfirmationService,
    private readonly notificationService: NotificationService,
    private readonly userContextService: UserContextService,
    private readonly router: Router
  ) {}

  /**
   * Lifecycle hook that is called after component initialization.
   * Loads roles, retrieves user ID from route parameters, fetches user details,
   * and determines the current user's role from their authentication token.
   */
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.getUserDetails(this.userId);
    this.userContextRole = this.userContextService.getContextRole();
    if (this.userContextRole === GlobalRole.SuperAdmin) {
      this.loadRoles();
    }
  }

  /**
   * Loads the list of available roles from the RoleService.
   */
  loadRoles(): void {
    this.roleService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  /**
   * Fetches user details from the backend using the provided user ID.
   *
   * @param id - Unique identifier of the user whose details are to be fetched.
   */
  getUserDetails(id: string): void {
    this.userService.getUserDetails(id).subscribe({
      next: (response: UserResponse) => {
        if (!response || !response.user) {
          this.notificationService.showError('Failed to load user details.');
          this.userDetails = null;
          return;
        }

        this.userDetails = response;
        this.selectedRoleId = response.user.roleId ?? null;
        this.selectedStatus = response.user.accountStatus ?? null;
      },
    });
  }

  /**
   * Updates the component's selected role ID when a new role is selected from the dropdown.
   *
   * @param roleId - The ID of the newly selected role.
   */
  onRoleChange(roleId: string): void {
    this.selectedRoleId = roleId === '' ? null : roleId;
  }

  /**
   * Updates the component's selected account status when a new status is selected.
   *
   * @param status - The new account status selected from the dropdown.
   */
  onAccountStatusChange(status: string): void {
    this.selectedStatus = status === '' ? null : +status;
  }

  /**
   * Updates the user settings by applying any changes to role or account status.
   * It first checks if user details are loaded, then compares the selected role
   * and status with the current values. Only if there are changes, it proceeds to
   * update the role (removing the old role first if necessary) and/or the status
   * by calling the appropriate API methods.
   */
  updateUserSettings(): void {
    if (!this.userDetails || !this.userDetails.user) {
      this.loggerService.error(
        'User details not loaded. Cannot update settings.'
      );
      return;
    }

    const user = this.userDetails.user;
    const roleChanged = this.selectedRoleId !== user.roleId;
    const statusChanged = this.selectedStatus !== user.accountStatus;

    if (!roleChanged && !statusChanged) {
      return;
    }

    if (roleChanged) {
      if (this.selectedRoleId) {
        if (user.roleId == null) {
          this.assignUserRole().subscribe();
        } else {
          this.removeUserRole()
            .pipe(switchMap(() => this.assignUserRole()))
            .subscribe();
        }
      }
    }

    if (statusChanged) {
      switch (this.selectedStatus) {
        case 1:
          this.activateUser().subscribe();
          break;
        case 0:
          this.deactivateUser().subscribe();
          break;
        default:
          this.loggerService.error('Invalid status selected');
      }
    }
  }

  /**
   * Initiates the deletion of the user associated with this component.
   * Upon successful deletion, navigates back to the user list route.
   */
  deleteUser(): void {
    const confirmed = this.confirmationService.confirm(
      'Are you sure you want to delete this user?'
    );
    if (!confirmed) return;

    this.userService.deleteUser(this.userId).subscribe({
      next: () => {
        this.router.navigate([this.userRoute]);
      },
      error: () => {
        this.notificationService.showError('Failed to delete user');
      },
    });
  }

  private assignUserRole(): Observable<void> {
    return this.userService.assignRole(this.userId, this.selectedRoleId!).pipe(
      tap(() => {
        this.showRoleSuccessMessage();
        this.getUserDetails(this.userId);
      }),
      catchError((err) => {
        this.showFailureMessage();
        return throwError(() => err);
      })
    );
  }

  private removeUserRole(): Observable<void> {
    return this.userService.removeAssignedRole(this.userId).pipe(
      catchError((err) => {
        this.showFailureMessage();
        return throwError(() => err);
      })
    );
  }

  private activateUser(): Observable<void> {
    return this.userService.activateUser(this.userId).pipe(
      tap(() => {
        this.showStatusSuccessMessage();
        this.getUserDetails(this.userId);
      }),
      catchError((err) => {
        this.showFailureMessage();
        return throwError(() => err);
      })
    );
  }

  private deactivateUser(): Observable<void> {
    return this.userService.deactivateUser(this.userId).pipe(
      tap(() => {
        this.showStatusSuccessMessage();
        this.getUserDetails(this.userId);
      }),
      catchError((err) => {
        this.showFailureMessage();
        return throwError(() => err);
      })
    );
  }

  private showStatusSuccessMessage(): void {
    this.notificationService.showSuccess('User status updated successfully');
  }

  private showRoleSuccessMessage(): void {
    this.notificationService.showSuccess('User role updated successfully');
  }

  private showFailureMessage(): void {
    this.notificationService.showError('Failed to update user settings');
  }
}
