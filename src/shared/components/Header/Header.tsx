import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../Text';

import { useTheme } from '@shared/hooks';

import { HeaderProps } from './Header.types';

/**
 * Application screen header.
 */
export function Header({
  title,
  subtitle,
  backButton = false,
  rightComponent,
  paddingTop = true,
}: HeaderProps) {
  const navigation = useNavigation();

  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: paddingTop ? theme.spacing.md : 0,
      }}
    >
      {backButton && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            marginRight: theme.spacing.md,
          }}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </Pressable>
      )}

      <View
        style={{
          flex: 1,
        }}
      >
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
