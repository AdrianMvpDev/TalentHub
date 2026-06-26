import { JobsResponse } from '@shared/types';

import { api } from '../api';

/**
 * Retrieves remote jobs.
 */
export async function getJobs() {
  return api.get<JobsResponse>('/remote-jobs');
}
