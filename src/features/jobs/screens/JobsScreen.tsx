import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { RootNavigationProp } from '@app/navigation';

import { ErrorView, Loader, Screen, SearchInput, Text } from '@shared/components';
import { FilterChips } from '@shared/components/FilterChips';
import { useTheme } from '@shared/hooks';

import { useFilters } from '@features/filters';

import { JobsList } from '../components';
import { useJobs } from '../hooks';
import { formatJobType } from '@shared/utils';

/**
 * Jobs listing screen.
 *
 * Responsibilities:
 * - Loads jobs and categories.
 * - Applies local filters.
 * - Displays loading, error and success states.
 */
export function JobsScreen() {
  const navigation = useNavigation<RootNavigationProp>();

  const { theme } = useTheme();

  /**
   * Jobs state.
   */
  const { jobs, loading, error, fetchJobs, filterJobs, jobTypes } = useJobs();

  /**
   * Filters state.
   */
  const {
    search,
    categories,
    selectedCategory,
    selectedJobType,
    loadingCategories,
    setSearch,
    setCategory,
    fetchCategories,
    setJobType,
  } = useFilters();

  /**
   * Global loading state.
   *
   * The screen is rendered only after both
   * jobs and categories have finished loading.
   */
  const isLoading = loading || loadingCategories;

  /**
   * Initial screen data.
   *
   * Both requests are executed in parallel to
   * reduce waiting time.
   */
  useEffect(() => {
    async function loadInitialData() {
      await Promise.all([fetchJobs(), fetchCategories()]);
    }

    void loadInitialData();
  }, [fetchJobs, fetchCategories]);

  /**
   * Applies client-side filtering whenever
   * any filter changes.
   */
  useEffect(() => {
    filterJobs({
      search,
      category: selectedCategory,
      jobType: selectedJobType,
    });
  }, [search, selectedCategory, selectedJobType, filterJobs]);

  /**
   * Retries the initial requests.
   */
  async function handleRetry() {
    await Promise.all([fetchJobs(), fetchCategories()]);
  }

  async function handleRefresh() {
    await Promise.all([fetchJobs(), fetchCategories()]);
  }

  /**
   * Error state.
   */
  if (error) {
    return <ErrorView message={error} onRetry={handleRetry} />;
  }

  /**
   * Initial loading state.
   */
  if (isLoading) {
    return (
      <Screen>
        <Loader fullScreen color={theme.colors.accent} />
      </Screen>
    );
  }

  /**
   * Empty state displayed when filters
   * produce no matching jobs.
   */
  const emptyTitle = selectedCategory ? `No ${selectedCategory} jobs` : 'No jobs found';

  const emptyDescription = selectedCategory
    ? `No jobs available in ${selectedCategory}.`
    : 'Try another search.';

  const categoryItems = categories.map((category) => ({
    label: category.name,
    value: category.name,
  }));

  const jobTypeItems = jobTypes.map((type) => ({
    label: formatJobType(type),
    value: type,
  }));

  return (
    <Screen padding={false}>
      <SearchInput value={search} onChangeText={setSearch} />

      <Text variant="caption" style={{ paddingHorizontal: 16 }}>
        Categories
      </Text>

      <FilterChips
        items={categoryItems}
        selectedValue={selectedCategory}
        onSelect={setCategory}
      />

      <Text variant="caption" style={{ paddingHorizontal: 16 }}>
        Job type
      </Text>

      <FilterChips
        items={jobTypeItems}
        selectedValue={selectedJobType}
        onSelect={setJobType}
      />

      <JobsList
        jobs={jobs}
        loading={loading}
        refreshing={loading}
        onRefresh={handleRefresh}
        emptyTitle={emptyTitle}
        emptyDescription={emptyDescription}
        onJobPress={(job) =>
          navigation.navigate('JobDetail', {
            jobId: job.id,
          })
        }
      />
    </Screen>
  );
}
