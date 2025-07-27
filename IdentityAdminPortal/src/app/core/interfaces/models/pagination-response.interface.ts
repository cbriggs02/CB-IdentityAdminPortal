/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * PaginationResponse - Represents pagination metadata returned by paged API endpoints.
 * Provides context for how many results exist and how they are divided across pages.
 */
export interface PaginationResponse {
  /** Total number of items available across all pages */
  totalCount: number;

  /** Number of items per page */
  pageSize: number;

  /** The current page number (1-based) */
  currentPage: number;

  /** Total number of pages available */
  totalPages: number;
}
