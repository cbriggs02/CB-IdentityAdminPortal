/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * UserStateMetricResponse - Represents the response structure for user state metrics.
 * This interface defines the properties returned by the backend API
 * when querying the state of users, including the total count of users,
 * and the counts of activated and deactivated users.
 */
export interface UserStateMetricResponse {
  totalCount: number;
  activatedUsers: number;
  deactivatedUsers: number;
}
