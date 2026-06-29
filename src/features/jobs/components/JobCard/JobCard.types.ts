import { Job } from '@shared/types';

export interface JobCardProps {
  job: Job;

  onPress?: () => void;
}
