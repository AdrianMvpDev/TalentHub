import { Job } from '@shared/types';

export interface JobsState {
  jobs: Job[];

  filteredJobs: Job[];

  loading: boolean;

  error: string | null;

  fetchJobs: () => Promise<void>;

  filterJobs: (params: { search: string; category: string; jobType: string }) => void;

  clearError: () => void;
}
