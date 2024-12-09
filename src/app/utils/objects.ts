/**
 * Converts URLSearchParams to an object
 * @param params URLSearchParams
 * @returns Record<string, any>
 * @example
 * urlParamsToRecord(new URLSearchParams('a=1&b=2')); // { a: '1', b: '2' }
 */
export const urlParamsToRecord = (params: URLSearchParams): Record<string, any> => {
  const obj: Record<string, any> = {};
  params.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};
