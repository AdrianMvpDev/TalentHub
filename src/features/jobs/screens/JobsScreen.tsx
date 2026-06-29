import { useEffect } from 'react';

import { Screen, ErrorView, SearchInput } from '@shared/components';

import { JobsList } from '../components';

import { useJobs } from '../hooks';

import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@app/navigation';
import { View } from 'react-native';

/**
 * Jobs listing screen.
 */
export function JobsScreen() {
  const navigation = useNavigation<RootNavigationProp>();

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
        refreshing={loading}
        loading={loading}
        onRefresh={fetchJobs}
        onJobPress={(job) =>
          navigation.navigate('JobDetail', {
            jobId: job.id,
          })
        }
      />
    </Screen>
  );
}
