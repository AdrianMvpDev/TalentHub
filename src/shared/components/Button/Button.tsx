import { Pressable } from 'react-native';

import { Text } from '../Text';
import { useTheme } from '@shared/hooks';

import { Loader } from '../Loader';
import { ButtonProps } from './Button.types';

/**
 * Reusable themed button component.
 */
export function Button({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  fullWidth = false,
  style,
}: ButtonProps) {
  const { theme } = useTheme();

  const isDisabled = disabled || loading;

  const getBackgroundColor = () => {
    switch (variant) {
      case 'secondary':
        return theme.colors.surface;

      case 'outline':
      case 'ghost':
        return 'transparent';

      default:
        return theme.colors.primary;
    }
  };

  const getBorderColor = () => {
    switch (variant) {
      case 'outline':
        return theme.colors.primary;

      default:
        return 'transparent';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return theme.colors.surface;

      case 'secondary':
        return theme.colors.text;

      case 'outline':
      case 'ghost':
        return theme.colors.primary;

      default:
        return theme.colors.text;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[
        {
          height: 48,
          borderRadius: theme.borderRadius.md,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getBackgroundColor(),
          borderWidth: variant === 'outline' ? 1 : 0,
          borderColor: getBorderColor(),
          opacity: isDisabled ? 0.6 : 1,
          width: fullWidth ? '100%' : undefined,
          paddingHorizontal: theme.spacing.lg,
        },
        style,
      ]}
    >
      {loading ? (
        <Loader size="small" color="#FFFFFF" />
      ) : (
        <Text variant="button" color={getTextColor()}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}
