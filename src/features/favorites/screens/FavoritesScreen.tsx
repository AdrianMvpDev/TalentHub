import { EmptyState, Header, Screen } from '@shared/components';

/**
 * Favorite jobs screen.
 */
export function FavoritesScreen() {
  return (
    <Screen padding={false}>
      <Header title="Favorites" />

      <EmptyState title="No favorites" description="Your saved jobs will appear here." />
    </Screen>
  );
}
