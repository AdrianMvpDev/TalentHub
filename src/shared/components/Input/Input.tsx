import { TextInput, View } from 'react-native';

import { Text } from '../Text';

import { useTheme } from '@shared/hooks';

import { InputProps } from './Input.types';

/**
 * Reusable themed input component.
 */
export function Input({
  label,
  error,
  containerStyle,
  style,
  editable = true,
  ...props
}: InputProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          marginBottom: theme.spacing.md,
        },
        containerStyle,
      ]}
    >
      {label && (
        <Text
          variant="caption"
          style={{
            marginBottom: theme.spacing.sm,
          }}
        >
          {label}
        </Text>
      )}

      <TextInput
        editable={editable}
        placeholderTextColor={theme.colors.textSecondary}
        style={[
          {
            minHeight: 48,
            borderWidth: 1,
            borderColor: error ? theme.colors.error : theme.colors.border,
            borderRadius: theme.borderRadius.md,
            backgroundColor: theme.colors.surface,
            color: theme.colors.text,
            paddingHorizontal: theme.spacing.md,
            fontSize: theme.typography.fontSize.md,
          },
          style,
        ]}
        {...props}
      />

      {error && (
        <Text
          variant="caption"
          color={theme.colors.error}
          style={{
            marginTop: theme.spacing.xs,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}
