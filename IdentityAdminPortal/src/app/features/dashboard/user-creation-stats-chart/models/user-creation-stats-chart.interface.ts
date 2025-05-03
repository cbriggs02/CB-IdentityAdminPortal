/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserCreationChartData - Represents the structure of the data used in the User Creation Stats chart.
 */
export interface UserCreationChartData {
  name: string;
  series: {
    name: string; // Formatted date string
    value: number; // Number of users created on that date
  }[];
}
