export interface FavoritesState {
  favorites: string[];

  addFavorite: (id: string) => void;

  removeFavorite: (id: string) => void;

  isFavorite: (id: string) => boolean;
}
