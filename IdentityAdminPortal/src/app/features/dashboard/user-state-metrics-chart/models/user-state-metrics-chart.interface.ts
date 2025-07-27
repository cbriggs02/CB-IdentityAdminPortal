/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserStateMetricChartItem - Represents a single entry in the user state metrics chart.
 */
export interface UserStateMetricChartItem {
  /** Label or name for the metric (e.g., "Active Users", "Inactive Users") */
  name: string;

  /** Numeric value representing the count or measurement for this metric */
  value: number;
}
