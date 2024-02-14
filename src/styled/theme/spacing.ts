import { Spacing } from './Theme';
import { getSize, parseSize } from './styleUtil';

export function createSpacing(baseSpacingSize: string): Spacing {
  const parsedSize = parseSize(baseSpacingSize);
  const custom = (factor: number): string => {
    return getSize(parsedSize, factor);
  };

  return {
    xSmall: custom(0.2),
    small: custom(0.5),
    medium: custom(1),
    mediumLarge: custom(1.5),
    large: custom(2),
    xLarge: custom(4),
    custom
  };
}
