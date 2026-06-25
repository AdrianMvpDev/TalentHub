import { createContext } from 'react';
import { Theme } from '@app/theme';

export interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
}

/**
 * Theme context used to expose the current application theme.
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);
