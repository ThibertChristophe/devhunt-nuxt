// types/jobs.ts

export interface Skill {
  name: string;
  color: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  company: string;
  job_type: string;
  salary_min: number | null;
  salary_max: number | null;
  publish_date: string | null;
  skills: Skill[];
}

export interface Pagination {
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
  total_pages: number;
  total_count: number;
}

export interface JobsResponse {
  jobs: Job[]; // Le '?' indique que la propriété peut être undefined
  pagination: Pagination; // Le '?' indique que la propriété peut être undefined
}