import { FlatList } from 'react-native';

import { EmptyState, Header, Loader } from '@shared/components';

import { useTheme } from '@shared/hooks';

import { JobCard } from '../JobCard';

import { JobsListProps } from './JobsList.types';
import { useCallback } from 'react';
import { Job } from '@shared/types';

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

  const renderItem = useCallback(
    ({ item }: { item: Job }) => (
      <JobCard job={item} onPress={() => onJobPress?.(item)} />
    ),
    [onJobPress],
  );

  const keyExtractor = useCallback((item: Job) => item.id.toString(), []);

  return (
    <FlatList
      data={jobs}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshing={refreshing}
      onRefresh={onRefresh}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews
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
