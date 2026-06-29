import { useCallback } from 'react';
import { FlatList } from 'react-native';

import { EmptyState, Header, Loader } from '@shared/components';

import { useTheme } from '@shared/hooks';

import { Job } from '@shared/types';

import { JobCard } from '../JobCard';

import { JobsListProps } from './JobsList.types';

/**
 * Reusable jobs list component.
 *
 * Used by:
 * - Jobs screen.
 * - Favorites screen.
 *
 * Provides:
 * - Virtualized rendering.
 * - Pull to refresh.
 * - Loading state.
 * - Empty state.
 * - Optional header.
 */
export function JobsList({
  jobs,
  loading = false,
  refreshing = false,
  onRefresh,
  onJobPress,
  title = 'Jobs',
  subtitle = 'Find your next remote opportunity',
  emptyTitle = 'No jobs found',
  emptyDescription = 'Try another search.',
  showHeader = true,
}: JobsListProps) {
  const { theme } = useTheme();

  /**
   * Renders a single job card.
   */
  const renderItem = useCallback(
    ({ item }: { item: Job }) => (
      <JobCard job={item} onPress={() => onJobPress?.(item)} />
    ),
    [onJobPress],
  );

  /**
   * Stable key extractor.
   */
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
        showHeader ? (
          <Header title={title} subtitle={subtitle} paddingTop={false} />
        ) : null
      }
      ListEmptyComponent={
        loading ? (
          <Loader />
        ) : (
          <EmptyState title={emptyTitle} description={emptyDescription} />
        )
      }
      contentContainerStyle={{
        paddingHorizontal: theme.spacing.md,
        gap: theme.spacing.md,
        flexGrow: 1,
        paddingBottom: theme.spacing.md,
      }}
    />
  );
}
