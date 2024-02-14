import { Typography, TypographyDefinition } from './Theme';
import { getSize, parseSize } from './styleUtil';

export function createTypography(fontFamily: string, baseSize: string): Typography {
  const parsedSize = parseSize('1rem');

  const body: TypographyDefinition = {
    fontFamily,
    fontSize: getSize(parsedSize, 1),
    lineHeight: 1.19,
    fontWeight: 'normal'
  };

  const bodyLarge: TypographyDefinition = {
    fontFamily,
    fontSize: getSize(parsedSize, 1.25),
    lineHeight: 1.22,
    fontWeight: 'normal'
  };

  const navigation: TypographyDefinition = {
    fontFamily,
    fontSize: getSize(parsedSize, 1.5),
    lineHeight: 1.19,
    fontWeight: 'normal'
  };

  const heading3: TypographyDefinition = {
    fontFamily,
    fontSize: getSize(parsedSize, 1.5),
    lineHeight: 1.08,
    fontWeight: 'bold'
  };

  return {
    baseSize,
    body,
    bodyLarge,
    navigation,
    heading3
  };
}
