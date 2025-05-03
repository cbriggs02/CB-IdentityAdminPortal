import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { Color } from '@swimlane/ngx-charts';
import { UserService } from '../../../core/services/user-management/user.service';
import { UserStateMetricChartItem } from './models/user-state-metrics-chart.interface';
/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * StateMetricsChartComponent - displays a summary of user state metrics
 * (total, activated, and deactivated users) in a visual chart using ngx-charts.
 */
@Component({
  selector: 'app-user-state-metrics-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './user-state-metrics-chart.component.html',
  styleUrl: './user-state-metrics-chart.component.css',
})
export class StateMetricsChartComponent implements OnInit, OnDestroy {
  single: UserStateMetricChartItem[] = [];
  colorScheme: Color = {
    domain: ['#D3D3D3', '#90EE90', '#FFA07A'],
    name: 'state metrics',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  private dataFetchInterval: any;

  /**
   * Constructor for the StateMetricsChartComponent.
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
        { name: 'Total Users', value: response.body?.totalCount ?? 0 },
        { name: 'Activated Users', value: response.body?.activatedUsers ?? 0 },
        {
          name: 'Deactivated Users',
          value: response.body?.deactivatedUsers ?? 0,
        },
      ];
    });
  }
}
