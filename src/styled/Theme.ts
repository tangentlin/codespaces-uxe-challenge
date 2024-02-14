export interface Theme {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
}

export interface Palette {
  background: {
    default: string;
    surface: string;
  }
  text: {
    default: string;
    disabled: string;
  }
  interactivity: {
    active: string;
    hover: string;
    selected: string;
    // TODO: define other states
  }
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
  body: TypographDefinition;
  bodyLarge: TypographDefinition;
  navigation: TypographDefinition;
  heading3: TypographDefinition;
}

export interface TypographDefinition {
  fontFamily: string;
  fontSize: string;
  lineHeight: number | string;
  fontWeight: string | number;
}

export interface Spacing {
  small: string;
  medium: string;
  large: string;
  xLarge: string;
  custom: (factor: number) => string;
}