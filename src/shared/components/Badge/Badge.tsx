import { View } from 'react-native';

import { Text } from '../Text';
import { useTheme } from '@shared/hooks';

import { BadgeProps } from './Badge.types';

/**
 * Small badge component used for job tags.
 */
export function Badge({ label, variant = 'primary' }: BadgeProps) {
  const { theme } = useTheme();

  const backgroundColor = {
    primary: theme.colors.primary,
    secondary: theme.colors.surface,
    success: theme.colors.success,
  };

  return (
    <View
      style={{
        alignSelf: 'flex-start',
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: 6,
        borderRadius: theme.borderRadius.full,
        backgroundColor: backgroundColor[variant],
      }}
    >
      <Text variant="caption" color="#FFFFFF">
        {label}
      </Text>
    </View>
  );
}
