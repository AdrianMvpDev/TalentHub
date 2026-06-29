import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '@shared/hooks';

import { JobsScreen } from '@features/jobs/screens';
import { FavoritesScreen } from '@features/favorites/screens';

import { MainTabParamList } from './navigation.types';

const Tab = createBottomTabNavigator<MainTabParamList>();

/**
 * Main application bottom tabs.
 */
export function MainTabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: theme.colors.primary,

        tabBarInactiveTintColor: theme.colors.textSecondary,

        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: theme.colors.surface,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarIcon: ({ color, size, focused }) => {
          let iconName: 'briefcase-outline' | 'briefcase' | 'heart-outline' | 'heart';

          if (route.name === 'Jobs') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          title: 'Jobs',
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
        }}
      />
    </Tab.Navigator>
  );
}
