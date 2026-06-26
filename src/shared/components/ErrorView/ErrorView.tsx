import { View } from 'react-native';

import { Button } from '../Button';
import { Text } from '../Text';

import { useTheme } from '@shared/hooks';

import { ErrorViewProps } from './ErrorView.types';

/**
 * Displays an error state.
 */
export function ErrorView({ message, onRetry }: ErrorViewProps) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        alignItems: 'center',
        paddingVertical: theme.spacing.xl,
      }}
    >
      <Text variant="subtitle" color={theme.colors.error}>
        Algo salió mal
      </Text>

      <Text
        style={{
          marginTop: theme.spacing.sm,
          marginBottom: theme.spacing.lg,
          textAlign: 'center',
        }}
      >
        {message}
      </Text>

      {onRetry && <Button title="Reintentar" onPress={onRetry} />}
    </View>
  );
}
