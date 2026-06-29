import { useEffect } from 'react';

import { Screen, ErrorView, SearchInput } from '@shared/components';

import { JobsList } from '../components';

import { useJobs } from '../hooks';

/**
 * Jobs listing screen.
 */
export function JobsScreen() {
  const { jobs, loading, error, search, setSearch, fetchJobs } = useJobs();

  useEffect(() => {
    void fetchJobs();
  }, [fetchJobs]);

  if (error) {
    return <ErrorView message={error} onRetry={fetchJobs} />;
  }

  return (
    <Screen padding={false}>
      <SearchInput value={search} onChangeText={setSearch} />

      <JobsList
        jobs={jobs}
        loading={loading}
        refreshing={loading}
        onRefresh={fetchJobs}
      />
    </Screen>
  );
}
