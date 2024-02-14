/**
 * Hashes a string using the MurmurHash algorithm.
 * @see https://en.wikipedia.org/wiki/MurmurHash
 * @param str the string to hash
 * @returns
 */
export function murmurHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

let counter = 0;
export function newHashName(baseName: string): string {
  counter += 1;
  return murmurHash(`${baseName}-${counter}`);
}

export function newCssClassName(): string {
  return newHashName('css');
}
