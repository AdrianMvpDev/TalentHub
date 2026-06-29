import { useMemo } from 'react';

import { useFavoritesStore } from '../store';
import { useJobsStore } from '@features/jobs/store';

/**
 * useFavorites
 *
 * Returns the favorite jobs derived from the persisted
 * favorite identifiers.
 *
 * The hook centralizes favorites business logic and avoids
 * duplicating filtering logic inside screens.
 */
export function useFavorites() {
  /**
   * Favorite job identifiers persisted in AsyncStorage.
   */
  const favorites = useFavoritesStore((state) => state.favorites);

  /**
   * All jobs loaded from the API.
   */
  const jobs = useJobsStore((state) => state.jobs);

  /**
   * Favorite jobs.
   *
   * Memoized to avoid recalculating the list on every render.
   */
  const favoriteJobs = useMemo(
    () => jobs.filter((job) => favorites.includes(job.id)),
    [jobs, favorites],
  );

  return {
    favoriteJobs,
    hasFavorites: favoriteJobs.length > 0,
    totalFavorites: favoriteJobs.length,
  };
}
