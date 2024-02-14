import { TypographDefinition, Typography } from "./Theme";
import { getSize, parseSize } from "./styleUtil";

export function createTypography(fontFamily: string, baseSize: string): Typography {
  const parsedSize = parseSize(baseSize);
  
  const body: TypographDefinition = {
    fontFamily,
    fontSize: getSize(parsedSize, 1),
    lineHeight: 1.19,
    fontWeight: 'normal',
  }

  const bodyLarge: TypographDefinition = {
    fontFamily,
    fontSize: getSize(parsedSize, 1.25),
    lineHeight: 1.22,
    fontWeight: 'normal',
  }

  const navigation: TypographDefinition = {
    fontFamily,
    fontSize: getSize(parsedSize, 1.5),
    lineHeight: 1.19,
    fontWeight: 'normal',
  }

  const heading3: TypographDefinition = {
    fontFamily,
    fontSize: getSize(parsedSize, 1.5),
    lineHeight: 1.08,
    fontWeight: 'bold',
  }

  return {
    body,
    bodyLarge,
    navigation,
    heading3,
  }
}

