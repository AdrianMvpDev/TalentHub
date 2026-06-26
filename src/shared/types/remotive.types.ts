import { Job } from './job.types';

/**
 * Remotive jobs response.
 */
export interface JobsResponse {
  jobs: Job[];

  'job-count': number;

  'total-job-count': number;
}
