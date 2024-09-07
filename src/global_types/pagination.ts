/**
 * Represents the pagination information for a list of items.
 */
export interface PaginationType {
   total: number;
   current: number;
   next: number | null;
   previous: number | null;
}