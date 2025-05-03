import { Component, OnDestroy, OnInit } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { UserService } from '../../../core/services/user-management/user.service';
import { UserCreationStat } from '../../../core/interfaces/user-management/models/user-creation-stats-response.interface';
import { UserCreationChartData } from './models/user-creation-stats-chart.interface';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * CreationStatsChartComponent - fetches user creation data from the backend via the UserService,
 * formats it for consumption by the ngx-charts library, and displays it as a dynamic chart.
 * It also sets up a polling interval to refresh the data every 5 seconds.
 */
@Component({
  selector: 'app-user-creation-stats-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './user-creation-stats-chart.component.html',
  styleUrl: './user-creation-stats-chart.component.css',
})
export class CreationStatsChartComponent implements OnInit, OnDestroy {
  data: UserCreationChartData[] = [];
  colorScheme: Color = {
    domain: ['#90EE90'],
    name: 'users created',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  private dataFetchInterval: any;

  /**
   * Constructor for the CreationStatsChartComponent.
   *
   * @param userService - The service responsible for fetching user creation stats from the backend.
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
    this.userService.getUserCreationStats().subscribe((response) => {
      const stats = response.body?.userCreationStats ?? [];
      this.data = [
        {
          name: 'User Creations',
          series: stats.map((stat: UserCreationStat) => ({
            name: new Date(stat.date).toLocaleDateString(),
            value: stat.count,
          })),
        },
      ];
    });
  }
}
