import { useContext } from 'react';

import { ThemeContext } from '@app/providers/ThemeContext';

/**
 * Returns the current application theme and theme state.
 * Must be used within ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
}
