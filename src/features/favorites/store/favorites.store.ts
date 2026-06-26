import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { FavoritesState } from './favorites.types';

/**
 * Global favorite jobs state.
 * Data is persisted using AsyncStorage.
 */
export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (id) =>
        set((state) => ({
          favorites: [...state.favorites, id],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item !== id),
        })),

      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: 'favorites-storage',

      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
