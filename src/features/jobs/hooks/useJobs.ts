import { useJobsStore } from '../store';

/**
 * Jobs feature hook.
 */
export function useJobs() {
  const jobs = useJobsStore((state) => state.filteredJobs);

  const loading = useJobsStore((state) => state.loading);

  const error = useJobsStore((state) => state.error);

  const fetchJobs = useJobsStore((state) => state.fetchJobs);

  const filterJobs = useJobsStore((state) => state.filterJobs);

  const jobTypes = useJobsStore((state) => state.jobTypes);

  return {
    jobs,
    loading,
    error,
    fetchJobs,
    filterJobs,
    jobTypes,
  };
}
