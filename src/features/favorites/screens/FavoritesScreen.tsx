import { EmptyState, Header, Screen } from '@shared/components';

/**
 * Favorite jobs screen.
 */
export function FavoritesScreen() {
  return (
    <Screen>
      <Header title="Favoritos" />

      <EmptyState
        title="Sin favoritos"
        description="Los empleos guardados aparecerán aquí."
      />
    </Screen>
  );
}
