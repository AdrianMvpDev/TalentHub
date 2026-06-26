import { useEffect } from 'react';

import { Header, Screen, SearchInput, Loader, ErrorView } from '@shared/components';

import { useJobsStore } from '../store';

/**
 * Jobs listing screen.
 */
export function JobsScreen() {
  const { loading, error, fetchJobs } = useJobsStore();

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  if (loading) {
    return <Loader fullScreen />;
  }

  if (error) {
    return <ErrorView message={error} onRetry={fetchJobs} />;
  }

  return (
    <Screen>
      <Header title="Empleos" subtitle="Encuentra tu próxima oportunidad" />

      <SearchInput />
    </Screen>
  );
}
