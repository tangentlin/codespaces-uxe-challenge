import { IconSizeVariants } from './Theme';
import { SizeAndUnit, getSize, parseSize } from './styleUtil';

export function createIconSizeVariant(baseFontSize: string): IconSizeVariants {
  const parsedSize = parseSize(baseFontSize);
  const iconBaseSize: SizeAndUnit = {
    ...parsedSize,
    value: parsedSize.value * 1.25
  };

  const custom = (factor: number): string => {
    return getSize(iconBaseSize, factor);
  };

  return {
    small: custom(4 / 5),
    medium: custom(1),
    large: custom(2)
  };
}
