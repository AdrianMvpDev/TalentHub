import { NavigationContainer } from '@react-navigation/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RootStackNavigator } from './RootStackNavigator';

/**
 * Modern navigation container
 */
export function RootNavigator() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
