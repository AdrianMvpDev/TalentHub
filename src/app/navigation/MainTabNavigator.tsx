import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { JobsScreen } from '@features/jobs/screens';
import { FavoritesScreen } from '@features/favorites/screens';

import { useTheme } from '@shared/hooks';

const Tab = createBottomTabNavigator();

/**
 * Main application bottom tabs.
 */
export function MainTabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.textSecondary,

        lazy: true,
        freezeOnBlur: true,
        tabBarHideOnKeyboard: true,
        animation: 'fade',

        tabBarStyle: {
          height: 60,

          borderTopWidth: 1,
          borderTopColor: theme.colors.border,

          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,

          overflow: 'hidden',

          elevation: 8,

          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 8,
          shadowOffset: {
            width: 0,
            height: -2,
          },
        },

        tabBarItemStyle: {
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 2,
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
