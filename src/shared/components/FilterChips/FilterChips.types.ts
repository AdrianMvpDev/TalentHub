export interface FilterChipItem {
  label: string;

  value: string;
}

export interface FilterChipsProps {
  items: FilterChipItem[];

  selectedValue: string;

  onSelect: (value: string) => void;
}
