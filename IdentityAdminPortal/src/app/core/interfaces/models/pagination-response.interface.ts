/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * PaginationResponse - Represents pagination metadata returned by paged API endpoints.
 * Provides context for how many results exist and how they are divided across pages.
 */
export interface PaginationResponse {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}
