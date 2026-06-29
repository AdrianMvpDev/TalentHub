import { borderRadius } from './borderRadius';
import { colors } from './colors';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export const darkTheme = {
  colors: {
    background: colors.gray[50],
    surface: colors.white,

    primary: colors.blue[500],
    accent: colors.pink[500],

    text: colors.gray[900],
    textSecondary: colors.gray[400],
    border: colors.gray[200],

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  },

  spacing,
  typography,
  borderRadius,
  shadows,
};
