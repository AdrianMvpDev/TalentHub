import { View } from 'react-native';

import { Text } from '@shared/components';
import { useTheme } from '@shared/hooks';

import { HeaderProps } from './Header.types';

/**
 * Application screen header.
 */
export function Header({ title, subtitle, rightComponent }: HeaderProps) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.lg,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text variant="title">{title}</Text>

        {subtitle && (
          <Text variant="caption" color={theme.colors.textSecondary}>
            {subtitle}
          </Text>
        )}
      </View>

      {rightComponent}
    </View>
  );
}
