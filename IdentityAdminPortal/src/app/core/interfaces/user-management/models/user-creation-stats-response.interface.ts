/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserCreationStat - Represents a single user creation stat entry.
 */
export interface UserCreationStat {
  date: string;
  count: number;
}

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserCreationStatsResponse - Represents the response for user creation statistics.
 */
export interface UserCreationStatsResponse {
  userCreationStats: UserCreationStat[];
}
