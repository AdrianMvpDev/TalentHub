import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Input } from '../Input';
import { useTheme } from '@shared/hooks';

import { SearchInputProps } from './SearchInput.types';

/**
 * SearchInput
 *
 * Reusable search component used across the application.
 * It combines:
 * - A search icon (decorative/semantic)
 * - A controlled input
 * - A clear button (X) that resets the value
 *
 * This component is fully controlled via props:
 * value + onChangeText
 *
 * Features:
 * - Displays search icon on the left
 * - Displays clear button only when there is text
 * - Automatically clears input and triggers external state update
 * - Responsive padding adjustment based on UI elements visibility
 */
export function SearchInput(props: SearchInputProps) {
  const { theme } = useTheme();

  /**
   * Controlled input props coming from parent.
   * This ensures SearchInput remains stateless and reusable.
   */
  const { value, onChangeText } = props;

  /**
   * Clears the input value.
   *
   * Why this exists:
   * Instead of forcing parent components to implement clearing logic,
   * we centralize UX behavior inside the input component.
   *
   * Side effect:
   * - Calls onChangeText with empty string
   * - This automatically triggers filtering logic in Zustand store
   */
  const handleClear = () => {
    onChangeText?.('');
  };

  return (
    <View
      style={{
        position: 'relative',
        marginHorizontal: theme.spacing.md,
      }}
    >
      {/* =========================
          SEARCH ICON (LEFT SIDE)
          =========================
          Decorative icon to indicate search context.
          Positioned absolutely inside the input container.
      */}
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

      {/* =========================
          CLEAR BUTTON (RIGHT SIDE)
          =========================
          Only visible when input has value.
          Improves UX by allowing quick reset.
      */}
      {!!value && (
        <Pressable
          onPress={handleClear}
          hitSlop={10}
          style={{
            position: 'absolute',
            right: theme.spacing.md,
            top: 12,
            zIndex: 1,
          }}
        >
          <Ionicons name="close" size={20} color={theme.colors.textSecondary} />
        </Pressable>
      )}

      {/* =========================
          INPUT FIELD
          =========================
          Controlled input that:
          - Receives value from parent
          - Sends changes via onChangeText
          - Adjusts padding depending on icons visibility
      */}
      <Input
        placeholder="Search for jobs..."
        value={value}
        onChangeText={onChangeText}
        style={{
          paddingLeft: 44,

          /**
           * Prevents text overlap with clear button when visible.
           * If no value, padding is slightly reduced for better alignment.
           */
          paddingRight: value ? 44 : theme.spacing.md,
        }}
        {...props}
      />
    </View>
  );
}
