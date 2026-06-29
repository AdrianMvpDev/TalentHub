import { useJobsStore } from '../store';

/**
 * Jobs feature hook.
 */
export function useJobs() {
  const jobs = useJobsStore((state) => state.filteredJobs);

  const loading = useJobsStore((state) => state.loading);

  const error = useJobsStore((state) => state.error);

  const search = useJobsStore((state) => state.search);

  const fetchJobs = useJobsStore((state) => state.fetchJobs);

  const setSearch = useJobsStore((state) => state.setSearch);

  return {
    jobs,
    loading,
    error,
    search,
    fetchJobs,
    setSearch,
  };
}
