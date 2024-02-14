export interface Theme {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  iconSize: IconSizeVariants;
}

export interface Palette {
  background: {
    default: string;
    surface: string;
  };
  text: {
    default: string;
    disabled: string;
  };
  interactivity: {
    active: string;
    hover: string;
    selected: string;
    // TODO: define other states
  };
  primary: Color;
  secondary: Color;
  divider: string;
  border: string;
}

export interface Color {
  normal: string;
  /**
   * Contrast color
   */
  contrast: string;
}

export interface Typography {
  baseSize: string;
  body: TypographyDefinition;
  bodyLarge: TypographyDefinition;
  navigation: TypographyDefinition;
  heading3: TypographyDefinition;
}

export interface TypographyDefinition {
  fontFamily: string;
  fontSize: string;
  lineHeight: number | string;
  fontWeight: string | number;
}

export interface Spacing {
  xSmall: string;
  small: string;
  medium: string;
  mediumLarge: string;
  large: string;
  xLarge: string;
  custom: (factor: number) => string;
}
export type SpacingVariant = keyof Omit<Spacing, 'custom'>;

export interface IconSizeVariants {
  small: string;
  medium: string;
  large: string;
}
export type IconSize = keyof IconSizeVariants;
