/**
 * Cache the result of a function
 *
 * @param fn Function to cache
 * @returns Cached function
 * @example
 * const fn = cache((key: string) => key);
 */
export const cache = (fn: Function) => {
  let cache: any = undefined;
  return (...args: any[]) => {
    if (cache !== undefined) return cache;
    const result = fn.call(null, ...args);
    cache = result;
    return result;
  };
};
