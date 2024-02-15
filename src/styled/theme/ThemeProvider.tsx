import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useMemo, useState } from 'react';
import { injectGlobalStyle } from '../engine/injectStyle';
import { Theme } from './Theme';
import { darkTheme, lightTheme } from './createTheme';
import { getThemeGlobalCss } from './themeUtil';

export type ThemeMode = 'light' | 'dark';

export type ThemeSetting = ThemeMode | Theme;

export type ThemeModeWithCustom = ThemeMode | 'custom';

export interface ThemeContextValue {
  /**
   * The current semantic name of the theme
   */
  mode: ThemeModeWithCustom;
  /**
   * Actual theme object
   */
  theme: Theme;
  setTheme: Dispatch<SetStateAction<ThemeSetting>>;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children?: ReactNode;
  mode: ThemeSetting;
}

const themeToken = Symbol('theme');
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, mode } = props;
  const [theme, setTheme] = useState<ThemeSetting>(mode);
  const resolvedTheme = getTheme(theme);

  let resolvedMode: ThemeModeWithCustom = 'light';
  if (typeof theme === 'object') {
    resolvedMode = 'custom';
  } else {
    resolvedMode = theme;
  }

  // Memoize the return value to avoid unnecessary re-renders
  const value = useMemo<ThemeContextValue>(
    () => ({ mode: resolvedMode, theme: resolvedTheme, setTheme }),
    [resolvedMode, resolvedTheme, setTheme]
  );

  useEffect(() => {
    // Replace global css
    const css = getThemeGlobalCss(resolvedTheme);
    injectGlobalStyle(css, themeToken, 'replace');
  }, [resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

function getTheme(modeOrTheme: ThemeSetting): Theme {
  if (modeOrTheme === 'light') {
    return lightTheme;
  }
  if (modeOrTheme === 'dark') {
    return darkTheme;
  }
  return modeOrTheme;
}
