export interface SizeAndUnit {
  value: number;
  unit: string;
}

const regex = /^([-+]?[0-9]*\.?[0-9]+)([a-z%]*)$/i;
export function parseSize(size: string): SizeAndUnit {
  // TODO: This function does not do any strict parsing
  const match = size.match(regex);
  if (match) {
    return {
      value: parseFloat(match[1]),
      unit: match[2]
    };
  }
  throw new Error(`The supplied size ${size} is not a valid size, please use valid values such as 1rem, 12px etc.`);
}

export function getSize(baseSize: SizeAndUnit, multiplier: number): string {
  return `${baseSize.value * multiplier}${baseSize.unit}`;
}
