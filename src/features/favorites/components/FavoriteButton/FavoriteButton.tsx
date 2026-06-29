import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '@shared/hooks';

import { FavoriteButtonProps } from './FavoriteButton.types';
import { useFavorite } from '@features/favorites/hooks';

/**
 * Favorite button.
 *
 * Allows users to add or remove jobs from favorites.
 *
 * The component is intentionally isolated from screens
 * so it can be reused in:
 *
 * - Job cards.
 * - Job details.
 * - Favorite lists.
 */
export function FavoriteButton({ jobId }: FavoriteButtonProps) {
  const { theme } = useTheme();

  const { isFavorite, toggleFavorite } = useFavorite(jobId);

  return (
    <Pressable onPress={toggleFavorite}>
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={22}
        color={isFavorite ? theme.colors.error : theme.colors.textSecondary}
      />
    </Pressable>
  );
}
