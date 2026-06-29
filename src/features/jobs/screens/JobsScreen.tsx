import { useEffect } from 'react';

import { Screen, ErrorView, SearchInput } from '@shared/components';

import { JobsList } from '../components';

import { useJobs } from '../hooks';

import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@app/navigation';
import { useFilters } from '@features/filters';

/**
 * Jobs listing screen.
 */
export function JobsScreen() {
  const navigation = useNavigation<RootNavigationProp>();

  const { jobs, loading, error, fetchJobs, filterJobs } = useJobs();

  const { search, selectedCategory, selectedJobType, setSearch, fetchCategories } =
    useFilters();

  /**
   * Initial jobs load.
   */
  useEffect(() => {
    void fetchJobs();
  }, []);

  /**
   * Loads categories.
   */
  useEffect(() => {
    void fetchCategories();
  }, []);

  /**
   * Applies local filters.
   */
  useEffect(() => {
    filterJobs({
      search,
      category: selectedCategory,
      jobType: selectedJobType,
    });
  }, [search, selectedCategory, selectedJobType]);

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
        onJobPress={(job) =>
          navigation.navigate('JobDetail', {
            jobId: job.id,
          })
        }
      />
    </Screen>
  );
}
