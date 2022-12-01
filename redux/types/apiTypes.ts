export interface ApiResponse<T> {
  count: number;
  next?: number;
  previous?: number;
  results: T[];
  cart_items: T[]
}
