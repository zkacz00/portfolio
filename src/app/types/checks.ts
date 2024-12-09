export const isNumber = (value: any): value is number => typeof value === 'number';

export const isString = (value: any): value is string => typeof value === 'string';

export const isBoolean = (value: any): value is boolean => typeof value === 'boolean';

export const isObject = (value: any): value is object => typeof value === 'object';

export const isFunction = (value: any): value is Function => typeof value === 'function';

export const isNull = (value: any): value is null => value === null;

export const isUndefined = (value: any): value is undefined => typeof value === 'undefined';

export const isNil = (value: any): value is null | undefined => isNull(value) || isUndefined(value);

export const isDefined = (value: any): value is any => !isUndefined(value);

export const isTruthy = (value: any): value is any => !!value;

export const isFalsy = (value: any): value is any => !value;

export const isArray = (value: any): value is any[] => Array.isArray(value);

export const isDate = (value: any): value is Date => value instanceof Date;

export const isRegExp = (value: any): value is RegExp => value instanceof RegExp;

export const isPromise = (value: any): value is Promise<any> => {
  return isObject(value) && isFunction((value as Promise<any>).then);
};

export const isElement = (value: any): value is Element => value instanceof Element;
