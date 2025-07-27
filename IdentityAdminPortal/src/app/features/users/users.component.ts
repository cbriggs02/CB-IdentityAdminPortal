import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { AppRoutes } from '../../core/constants/routes/app-routes.constants';
import { Router } from '@angular/router';
import { SimplifiedUser } from '../../core/interfaces/user-management/models/users/users-response.interface';
import { AccountStatus } from '../../core/enums/account-status.enum';
import { AccountStatusLabels } from './account-status-labels.constant';
import { UserService } from '../../core/services/user-management/user.service';
import { UsersRequest } from '../../core/interfaces/user-management/models/users/users-request.interface';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UsersComponent - Displays a paginated, filterable list of users with the ability to view details.
 */
@Component({
  selector: 'app-users',
  imports: [CommonModule, MatPaginatorModule, MatTableModule, MatSelectModule],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  dataSource: SimplifiedUser[] = [];

  AccountStatus = AccountStatus;
  accountStatusLabels: { [key: number]: string } = AccountStatusLabels;
  selectedStatus?: AccountStatus;

  statusKeys: number[] = Object.keys(this.accountStatusLabels).map((k) => +k);
  displayedColumns: string[] = [
    'id',
    'userName',
    'name',
    'accountStatus',
    'manage',
  ];

  page = 1;
  pageSize = 10;
  totalItems = 0;

  /**
   * Initializes the component with required services.
   *
   * @param userService Service to fetch user data
   * @param router Used for navigation to user details
   */
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  /**
   * Lifecycle hook that runs after component initialization.
   * Triggers the first fetch of users.
   */
  ngOnInit(): void {
    this.fetchUsers();
  }

  /**
   * Fetches the users from the backend based on current pagination and filter settings.
   */
  fetchUsers(): void {
    const request: UsersRequest = {
      page: this.page,
      pageSize: this.pageSize,
      accountStatus: this.selectedStatus,
    };

    this.userService.getUsers(request).subscribe((response) => {
      this.dataSource = response.body?.users ?? [];
      this.totalItems = response.body?.paginationMetadata?.totalCount ?? 0;
    });
  }

  /**
   * Handles the filter change event when a user selects an account status.
   *
   * @param status Selected account status as string
   */
  onActionChange(status: string): void {
    this.selectedStatus = status === '' ? undefined : +status;
    this.page = 1;
    this.fetchUsers();
  }

  /**
   * Navigates to the detailed view of a selected user.
   *
   * @param id ID of the selected user
   */
  viewUser(id: string): void {
    this.router.navigate([`${AppRoutes.USER_DETAILS}/${id}`]);
  }

  /**
   * Handles the page change event triggered by the paginator.
   *
   * @param event Pagination event containing the new page index and size
   */
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.fetchUsers();
  }
}
