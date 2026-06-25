import { View } from 'react-native';

import { Text } from '@shared/components';
import { useTheme } from '@shared/hooks';

import { EmptyStateProps } from './EmptyState.types';

/**
 * Displays an empty state message.
 */
export function EmptyState({ title, description }: EmptyStateProps) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: theme.spacing.xl,
      }}
    >
      <Text variant="subtitle">{title}</Text>

      {description && (
        <Text
          variant="caption"
          color={theme.colors.textSecondary}
          style={{
            marginTop: theme.spacing.sm,
            textAlign: 'center',
          }}
        >
          {description}
        </Text>
      )}
    </View>
  );
}
