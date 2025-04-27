import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { Color } from '@swimlane/ngx-charts';
import { UserService } from '../../services/user-management/user.service';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * DashBoardComponent -This component represents the dashboard view where various user state metrics are visualized using
 * a bar chart. It fetches the user metrics at regular intervals and updates the chart accordingly.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  single: any[] = [];
  colorScheme: Color = {
    domain: ['#D3D3D3', '#90EE90', '#FFA07A'],
    name: 'state metrics',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  private dataFetchInterval: any;

  /**
   * Constructor for the DashboardComponent.
   *
   * @param userService - The service responsible for fetching user state metrics from the backend.
   */
  constructor(private userService: UserService) {}

  /**
   * ngOnInit lifecycle hook.
   * This method is called when the component is initialized. It fetches the initial state metrics
   * and sets up a polling mechanism to refresh the data every 5 seconds.
   */
  ngOnInit(): void {
    this.fetchStateMetrics();
    this.dataFetchInterval = setInterval(() => {
      this.fetchStateMetrics();
    }, 5000);
  }

  /**
   * ngOnDestroy lifecycle hook.
   * This method is called when the component is destroyed. It clears the polling interval
   * to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.dataFetchInterval) {
      clearInterval(this.dataFetchInterval);
    }
  }

  private fetchStateMetrics(): void {
    this.userService.getUserStateMetrics().subscribe((response) => {
      this.single = [
        { name: 'Total Users', value: response.body?.totalCount },
        { name: 'Activated Users', value: response.body?.activatedUsers },
        { name: 'Deactivated Users', value: response.body?.deactivatedUsers },
      ];
    });
  }
}
