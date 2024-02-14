import { useContext, useMemo } from 'react';
import { ThemeContext, ThemeContextValue } from './ThemeProvider';

export type UseThemeReturn = Pick<ThemeContextValue, 'mode' | 'theme' | 'setTheme'>;

export function useTheme(): UseThemeReturn {
  const context = useContext(ThemeContext);
  if (context == null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { mode, theme, setTheme } = context;

  // Memoize the return value to avoid unnecessary re-renders
  const result = useMemo<UseThemeReturn>(() => ({ mode, theme, setTheme }), [mode, theme, setTheme]);
  return result;
}
