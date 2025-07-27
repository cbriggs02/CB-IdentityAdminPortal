/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserCreationChartData - Represents the structure of the data used in the User Creation Stats chart.
 */
export interface UserCreationChartData {
  /** The name of the chart or data series (e.g., a label or category) */
  name: string;

  /**
   * An array of data points representing user creation over time.
   * Each object contains a formatted date and the number of users created on that date.
   */
  series: {
    /** Formatted date string representing the specific day */
    name: string;

    /** Number of users created on the corresponding date */
    value: number;
  }[];
}
