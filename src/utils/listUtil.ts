export function getSizedArray<T = number>(size: number, item: T): T[] {
  return Array(size).fill(item);
}
