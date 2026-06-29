import { useFiltersStore } from '../store';

/**
 * Filters hook.
 */
export function useFilters() {
  const search = useFiltersStore((state) => state.search);

  const selectedCategory = useFiltersStore((state) => state.selectedCategory);

  const selectedJobType = useFiltersStore((state) => state.selectedJobType);

  const categories = useFiltersStore((state) => state.categories);

  const setSearch = useFiltersStore((state) => state.setSearch);

  const setCategory = useFiltersStore((state) => state.setCategory);

  const setJobType = useFiltersStore((state) => state.setJobType);

  const fetchCategories = useFiltersStore((state) => state.fetchCategories);

  return {
    search,
    selectedCategory,
    selectedJobType,
    categories,
    setSearch,
    setCategory,
    setJobType,
    fetchCategories,
  };
}
