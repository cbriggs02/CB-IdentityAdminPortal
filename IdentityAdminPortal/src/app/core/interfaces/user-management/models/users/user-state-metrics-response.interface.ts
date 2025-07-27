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
  /** Total number of users in the system */
  readonly totalCount: number;

  /** Number of users whose accounts are currently activated */
  readonly activatedUsers: number;

  /** Number of users whose accounts are currently deactivated */
  readonly deactivatedUsers: number;
}
