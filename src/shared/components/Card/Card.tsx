import { View } from 'react-native';

import { useTheme } from '@shared/hooks';

import { CardProps } from './Card.types';

/**
 * Reusable card container component.
 */
export function Card({ children, style, padding = true }: CardProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.surface,
          borderRadius: theme.borderRadius.lg,
          borderWidth: 1,
          borderColor: theme.colors.border,
          padding: padding ? theme.spacing.md : 0,
          ...theme.shadows.card,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
