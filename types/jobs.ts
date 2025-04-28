import type { Job } from "~/server/database/schema";

export interface Pagination {
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
  total_pages: number;
  totalCount: number;
}

export interface JobsResponse {
  jobs: Job[]; // Le '?' indique que la propriété peut être undefined
  pagination: Pagination; // Le '?' indique que la propriété peut être undefined
}