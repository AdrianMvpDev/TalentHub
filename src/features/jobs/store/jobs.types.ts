import { Job } from '@shared/types';

export interface JobsState {
  jobs: Job[];

  filteredJobs: Job[];

  loading: boolean;

  error: string | null;

  search: string;

  fetchJobs: () => Promise<void>;

  setSearch: (value: string) => void;

  filterJobs: () => void;

  clearError: () => void;
}
