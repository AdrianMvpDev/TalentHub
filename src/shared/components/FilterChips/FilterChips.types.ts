import { Category } from '@shared/types';

export interface FilterChipsProps {
  items: Category[];

  selectedValue: string;

  onSelect: (value: string) => void;
}
