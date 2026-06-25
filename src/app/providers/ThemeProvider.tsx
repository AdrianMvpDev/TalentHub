import { ReactNode, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme } from '@app/theme';

import { ThemeContext } from './ThemeContext';

interface Props {
  children: ReactNode;
}

/**
 * Provides the application theme based on the system color scheme.
 * Exposes the active theme and dark mode state through ThemeContext.
 */

export function ThemeProvider({ children }: Props) {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
