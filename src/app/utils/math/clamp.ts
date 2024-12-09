/**
 * Clamps a numeric value between an optional minimum and maximum value.
 *
 * @param {number} value The value to be clamped.
 * @param {number} [min] The lower boundary to clamp `value` to. If `undefined`, no minimum boundary is enforced.
 * @param {number} [max] The upper boundary to clamp `value` to. If `undefined`, no maximum boundary is enforced.
 * @returns {number} The clamped value, confined within the min and max boundaries (if provided).
 * @example
 * clamp(10, 1, 100); // 10
 * clamp(-5, 1, 100); // 1
 * clamp(150, 1, 100); // 100
 */
export const clamp = (value: number, min?: number, max?: number): number => {
  value = min !== undefined ? Math.max(value, min) : value;
  value = max !== undefined ? Math.min(value, max) : value;
  return value;
};
