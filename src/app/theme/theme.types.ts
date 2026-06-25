import { borderRadius } from './borderRadius';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export interface Theme {
  colors: {
    background: string;
    surface: string;
    primary: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };

  spacing: typeof spacing;
  typography: typeof typography;
  borderRadius: typeof borderRadius;
  shadows: typeof shadows;
}
