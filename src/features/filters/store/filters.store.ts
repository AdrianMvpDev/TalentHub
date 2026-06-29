import { create } from 'zustand';

import { getCategories } from '@shared/services';

import { FiltersState } from './filters.types';

/**
 * Global filters state.
 */
export const useFiltersStore = create<FiltersState>((set) => ({
  search: '',

  selectedCategory: '',

  selectedJobType: '',

  categories: [],

  loadingCategories: false,

  setSearch: (search) =>
    set({
      search,
    }),

  setCategory: (selectedCategory) =>
    set({
      selectedCategory,
    }),

  setJobType: (selectedJobType) =>
    set({
      selectedJobType,
    }),

  fetchCategories: async () => {
    try {
      set({
        loadingCategories: true,
      });

      const categories = await getCategories();

      set({
        categories,
        loadingCategories: false,
      });
    } catch (error) {
      console.error(error);

      set({
        loadingCategories: false,
      });
    }
  },

  clearFilters: () =>
    set({
      search: '',
      selectedCategory: '',
      selectedJobType: '',
    }),
}));
