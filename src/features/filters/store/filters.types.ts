import { Category } from '@shared/types';

export interface FiltersState {
  search: string;

  selectedCategory: string;

  selectedJobType: string;

  categories: Category[];

  loadingCategories: boolean;

  setSearch: (value: string) => void;

  setCategory: (value: string) => void;

  setJobType: (value: string) => void;

  fetchCategories: () => Promise<void>;

  clearFilters: () => void;
}