import { Text as RNText } from 'react-native';

import { useTheme } from '@shared/hooks';

import { AppTextProps } from './Text.types';

/**
 * Typography component that provides themed text styles.
 */
export function Text({
  variant = 'body',
  color,
  style,
  children,
  ...props
}: AppTextProps) {
  const { theme } = useTheme();

  const variantStyle = theme.typography.variants[variant];

  return (
    <RNText
      style={[
        {
          color: color ?? theme.colors.text,
          fontSize: variantStyle.fontSize,
          fontWeight: variantStyle.fontWeight,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}
