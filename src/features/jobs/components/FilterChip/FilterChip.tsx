import { Pressable } from 'react-native';

import { Text } from '@shared/components';
import { useTheme } from '@shared/hooks';

import { FilterChipProps } from './FilterChip.types';

/**
 * Selectable filter chip.
 */
export function FilterChip({ label, selected = false, onPress }: FilterChipProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,

        borderWidth: 1,

        borderColor: selected ? theme.colors.primary : theme.colors.border,

        backgroundColor: selected ? theme.colors.primary : theme.colors.background,
      }}
    >
      <Text color={selected ? '#fff' : theme.colors.text}>{label}</Text>
    </Pressable>
  );
}
