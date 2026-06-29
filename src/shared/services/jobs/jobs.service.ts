import { JobsResponse } from '@shared/types';

import { api } from '../api';

/**
 * Retrieves remote jobs.
 */
export async function getJobs(params?: {
  search?: string;
  category?: string;
  limit?: number;
}): Promise<JobsResponse> {
  const query = new URLSearchParams();

  if (params?.search) {
    query.append('search', params.search);
  }

  if (params?.category) {
    query.append('category', params.category);
  }

  if (params?.limit) {
    query.append('limit', String(params.limit));
  }

  return api.get<JobsResponse>(`/remote-jobs?${query.toString()}`);
}
