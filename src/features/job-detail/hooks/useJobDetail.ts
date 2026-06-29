import { useRoute } from '@react-navigation/native';

import { RootStackParamList } from '@app/navigation';

import { RouteProp } from '@react-navigation/native';

import { useJobsStore } from '@features/jobs/store';

/**
 * Returns the selected job using the job id
 * received from navigation params.
 */
export function useJobDetail() {
  /**
   * Current route.
   */
  const route = useRoute<RouteProp<RootStackParamList, 'JobDetail'>>();

  /**
   * Job identifier received through navigation.
   */
  const { jobId } = route.params;

  /**
   * Job retrieved from the store.
   */
  const job = useJobsStore((state) => state.jobs.find((item) => item.id === jobId));

  return {
    job,
  };
}
