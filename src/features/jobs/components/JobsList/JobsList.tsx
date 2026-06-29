import { FlatList } from 'react-native';

import { EmptyState, Header, Loader } from '@shared/components';

import { useTheme } from '@shared/hooks';

import { JobCard } from '../JobCard';

import { JobsListProps } from './JobsList.types';

/**
 * Displays jobs list.
 */
export function JobsList({
  jobs,
  loading = false,
  refreshing = false,
  onRefresh,
  onJobPress,
}: JobsListProps) {
  const { theme } = useTheme();

  return (
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <JobCard job={item} onPress={() => onJobPress?.(item)} />}
      refreshing={refreshing}
      onRefresh={onRefresh}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Header title="Jobs" subtitle="Find your next remote opportunity" />
      }
      ListEmptyComponent={
        loading ? (
          <Loader />
        ) : (
          <EmptyState title="No jobs found." description="Try another search." />
        )
      }
      contentContainerStyle={{
        paddingHorizontal: theme.spacing.md,
        gap: theme.spacing.md,
        flexGrow: 1,
      }}
    />
  );
}
