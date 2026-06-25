import { ActivityIndicator, View } from 'react-native';

import { useTheme } from '@shared/hooks';

import { LoaderProps } from './Loader.types';

/**
 * Displays a themed loading indicator.
 */
export function Loader({ fullScreen = false, size = 'large' }: LoaderProps) {
  const { theme } = useTheme();

  if (fullScreen) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}
      >
        <ActivityIndicator size={size} color={theme.colors.primary} />
      </View>
    );
  }

  return <ActivityIndicator size={size} color={theme.colors.primary} />;
}
