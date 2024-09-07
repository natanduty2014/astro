/**
 * Represents the pagination information for a list of items.
 */
export interface PaginationType {
   total_pages: number;
   next_page: number | null;
   back_page: number | null;
   current_page: number;
}