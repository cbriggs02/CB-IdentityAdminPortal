import { Component } from '@angular/core';
import { StateMetricsChartComponent } from './user-state-metrics-chart/user-state-metrics-chart.component';
import { CreationStatsChartComponent } from './user-creation-stats-chart/user-creation-stats-chart.component';

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
  imports: [StateMetricsChartComponent, CreationStatsChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
