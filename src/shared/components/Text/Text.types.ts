import { TextProps } from 'react-native';

export type TextVariant = 'title' | 'subtitle' | 'body' | 'caption' | 'button';

export interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: string;
}
