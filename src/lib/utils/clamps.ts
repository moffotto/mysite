/**
 * Enforces a range on numbers
 *
 * @param {number | undefined} min -- defaults to 0; the min value of the range
 * @param {number | undefined} max -- defaults to 100; the max value of the range
 */
export function clamps(num: number, min?: number, max?: number): number {
  const minimum = min ?? 0;
  const maximum = max ?? 100;

  return num > maximum ? maximum : num < minimum ? minimum : num;
}
