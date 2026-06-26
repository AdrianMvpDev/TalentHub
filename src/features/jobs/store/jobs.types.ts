import { Job } from '@shared/types';

export interface JobsState {
  jobs: Job[];

  loading: boolean;

  error: string | null;

  fetchJobs: () => Promise<void>;

  clearError: () => void;
}
