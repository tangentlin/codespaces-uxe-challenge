import { Palette, Theme } from '../theme/Theme';
import { darkPalette, lightPalette } from '../theme/palette';
import { createSpacing } from '../theme/spacing';
import { createTypography } from '../theme/typography';
import { createIconSizeVariant } from './iconSize';

export function createTheme(fontFamily: string, baseSize: string, spacingBaseSize: string, palette: Palette): Theme {
  const typography = createTypography(fontFamily, baseSize);
  const spacing = createSpacing(spacingBaseSize);
  const iconSize = createIconSizeVariant('1rem');
  return {
    palette,
    typography,
    spacing,
    iconSize
  };
}

// TODO: Deep freeze these values in Type and runtime to avoid accidental mutaiton
export const darkTheme = createTheme('Arial, Helvetica Neue, sans-serif', '1rem', '0.625rem', darkPalette);

export const lightTheme = createTheme('Arial, Helvetica Neue, sans-serif', '1rem', '0.625rem', lightPalette);
