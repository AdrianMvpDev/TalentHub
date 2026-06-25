import { ActivityIndicator, View } from 'react-native';

import { useTheme } from '@shared/hooks';

import { LoaderProps } from './Loader.types';

/**
 * Displays a themed loading indicator.
 */
export function Loader({ fullScreen = false, size = 'large', color }: LoaderProps) {
  const { theme } = useTheme();

  const loaderColor = color ?? theme.colors.primary;

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
        <ActivityIndicator size={size} color={loaderColor} />
      </View>
    );
  }

  return <ActivityIndicator size={size} color={loaderColor} />;
}
