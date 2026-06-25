import { View, ScrollView } from 'react-native';
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
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: padding ? theme.spacing.md : 0,
  };

  if (scrollable) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <ScrollView
          contentContainerStyle={[containerStyle, style]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={[containerStyle, style]}>{children}</View>
    </SafeAreaView>
  );
}
