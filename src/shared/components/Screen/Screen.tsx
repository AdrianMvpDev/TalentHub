import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@shared/hooks';

import { ScreenProps } from './Screen.types';

/**
 * Provides a themed screen container with safe area support.
 */
export function Screen({
  children,
  padding = true,
  scrollable = false,
  style,
}: ScreenProps) {
  const { theme } = useTheme();

  const containerStyle = {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: padding ? theme.spacing.md : 0,
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      {scrollable ? (
        <ScrollView
          contentContainerStyle={[containerStyle, style]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            {
              flex: 1,
            },
            containerStyle,
            style,
          ]}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}
