import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
}
