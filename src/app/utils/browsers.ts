import { cache } from './cache';
/**
 * Get the current browser
 *
 * @returns {string} The current browser
 * @example
 * getBrowser(); // 'chrome'
 */
export const getBrowser = cache(() => {
  const ua = navigator.userAgent.toLowerCase();

  if (/safari/.test(ua)) {
    if (/chrome/.test(ua)) {
      return 'chrome';
    }
    return 'safari';
  }
  if (/firefox/.test(ua)) {
    return 'firefox';
  }
  if (/opera/.test(ua)) {
    return 'opera';
  }
  if (/msie/.test(ua)) {
    return 'ie';
  }
  if (/edge/.test(ua)) {
    return 'edge';
  }
  return 'unknown';
});

/**
 * Check if the current browser supports webp
 *
 * @returns {boolean} Whether the current browser supports webp
 * @example
 * isWEBPAvailable(); // true
 */
export const isWEBPAvailable = cache((): boolean => {
  const elem = document.createElement('canvas');
  if (!(elem.getContext && elem.getContext('2d'))) return false;
  return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
});
