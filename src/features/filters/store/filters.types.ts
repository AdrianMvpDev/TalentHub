export interface FiltersState {
  search: string;

  setSearch: (value: string) => void;

  clearFilters: () => void;
}
