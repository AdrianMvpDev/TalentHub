import { Category } from './category.types';
import { Job } from './job.types';

/**
 * Jobs API response.
 */
export interface JobsResponse {
  jobs: Job[];
}

/**
 * Categories API response.
 */
export interface CategoriesResponse {
  jobs: Category[];
}
