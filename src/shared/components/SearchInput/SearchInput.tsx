import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Input } from '../Input';
import { useTheme } from '@shared/hooks';

import { SearchInputProps } from './SearchInput.types';

/**
 * Search input component used across the application.
 */
export function SearchInput(props: SearchInputProps) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        position: 'relative',
      }}
    >
      <View
        style={{
          position: 'absolute',
          left: theme.spacing.md,
          top: 14,
          zIndex: 1,
        }}
      >
        <Ionicons name="search" size={20} color={theme.colors.textSecondary} />
      </View>

      <Input
        placeholder="Buscar empleos..."
        style={{
          paddingLeft: 44,
        }}
        {...props}
      />
    </View>
  );
}
