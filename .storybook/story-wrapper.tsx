import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from '../src/styled/theme';

export const withStoryWrapper = (Story: any) => {
  const isDarkMode = useDarkMode();
  const mode = isDarkMode ? 'dark' : 'light';
  return (
    <ThemeProvider mode={mode}>
      <Story />
    </ThemeProvider>
  );
};
