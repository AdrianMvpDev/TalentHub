import { useFavoritesStore } from '../store';

/**
 * Favorite hook for a single job.
 */
export function useFavorite(id: number) {
  const isFavorite = useFavoritesStore((state) => state.isFavorite(id));

  const addFavorite = useFavoritesStore((state) => state.addFavorite);

  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  function toggleFavorite() {
    if (isFavorite) {
      removeFavorite(id);
      return;
    }

    addFavorite(id);
  }

  return {
    isFavorite,
    toggleFavorite,
  };
}
