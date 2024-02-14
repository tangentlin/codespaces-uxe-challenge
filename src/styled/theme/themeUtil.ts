import { css } from '../engine/styled';
import { Theme, TypographyDefinition } from './Theme';

export function getThemeGlobalCss(theme: Theme) {
  // TODO: Add more CSS variables
  theme.typography.body;
  return css`
    :root {
      --color-primary: ${theme.palette.primary.normal};
      --color-secondary: ${theme.palette.secondary.normal};
      --color-background: ${theme.palette.background.default};
      --color-foreground: ${theme.palette.text.default};
    }

    body,
    button,
    textarea {
      font-size: ${theme.typography.baseSize};
      background-color: var(--color-background);
      color: var(--color-foreground);
      ${getTypographyCss(theme.typography.body)}
    }
  `;
}

export function getTypographyCss(typography: TypographyDefinition) {
  return css`
    font-family: ${typography.fontFamily};
    font-size: ${typography.fontSize};
    line-height: ${typography.lineHeight};
    font-weight: ${typography.fontWeight};
  `;
}
