import { Job } from '@shared/types';

export interface JobsListProps {
  jobs: Job[];

  loading?: boolean;

  refreshing?: boolean;

  onRefresh?: () => void;

  onJobPress?: (job: Job) => void;
}
