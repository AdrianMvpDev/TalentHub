import { useMemo, useState } from 'react';

import { Job } from '@shared/types';

/**
 * Provides local job filtering.
 */
export function useJobSearch(jobs: Job[]) {
  const [search, setSearch] = useState('');

  const filteredJobs = useMemo(() => {
    if (!search.trim()) {
      return jobs;
    }

    const query = search.toLowerCase();

    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company_name.toLowerCase().includes(query),
    );
  }, [jobs, search]);

  return {
    search,
    setSearch,
    filteredJobs,
  };
}

