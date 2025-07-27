/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserCreationStat - Represents a single user creation stat entry.
 */
export interface UserCreationStat {
  /** The date of the user creation statistic in ISO format (e.g., YYYY-MM-DD) */
  readonly date: string;

  /** The number of users created on the specified date */
  readonly count: number;
}

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserCreationStatsResponse - Represents the response for user creation statistics.
 */
export interface UserCreationStatsResponse {
  /** Array of user creation statistics, each representing data for a specific date */
  readonly userCreationStats: UserCreationStat[];
}
