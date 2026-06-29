import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainTabNavigator } from './MainTabNavigator';

import { JobDetailScreen } from '@features/job-detail/screens';

const Stack = createNativeStackNavigator();

/**
 * Root application navigator.
 */
export function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
        animation: 'ios_from_right',
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />

      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
    </Stack.Navigator>
  );
}
