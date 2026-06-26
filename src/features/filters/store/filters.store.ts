import { create } from 'zustand';

import { FiltersState } from './filters.types';

/**
 * Global filters state.
 */
export const useFiltersStore = create<FiltersState>((set) => ({
  search: '',

  setSearch: (search) =>
    set({
      search,
    }),

  clearFilters: () =>
    set({
      search: '',
    }),
}));
