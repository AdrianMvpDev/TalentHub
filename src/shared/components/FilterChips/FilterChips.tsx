import { ScrollView, Pressable } from 'react-native';

import { Text } from '../Text';
import { useTheme } from '@shared/hooks';

import { FilterChipsProps } from './FilterChips.types';
import { chipStyle } from './FilterChips.styles';

/**
 * Horizontal selectable chips.
 *
 * Used for:
 * - Categories.
 * - Job types.
 */
export function FilterChips({ items, selectedValue, onSelect }: FilterChipsProps) {
  const { theme } = useTheme();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        flexGrow: 0,
        minHeight: 40,
        maxHeight: 40,
      }}
      contentContainerStyle={{
        paddingHorizontal: theme.spacing.md,
        alignItems: 'center',
        gap: theme.spacing.sm,
      }}
    >
      <Pressable
        onPress={() => onSelect('')}
        style={[
          chipStyle,
          {
            backgroundColor:
              selectedValue === '' ? theme.colors.accent : theme.colors.surface,

            borderColor: selectedValue === '' ? theme.colors.accent : theme.colors.border,
          },
        ]}
      >
        <Text
          variant="caption"
          numberOfLines={1}
          color={selectedValue === '' ? '#fff' : undefined}
        >
          All
        </Text>
      </Pressable>

      {items.map((item) => {
        const selected = selectedValue === item.name;

        return (
          <Pressable
            key={item.id}
            onPress={() => onSelect(item.name)}
            style={[
              chipStyle,
              {
                backgroundColor: selected ? theme.colors.accent : theme.colors.surface,

                borderColor: selected ? theme.colors.accent : theme.colors.border,
              },
            ]}
          >
            <Text
              variant="caption"
              numberOfLines={1}
              color={selected ? '#fff' : undefined}
            >
              {item.name}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
