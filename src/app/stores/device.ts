import Store from '../utils/store';
import { ScreenSize } from '../types/screen';

const isBrowser = typeof window !== 'undefined';

const match = (media: string) => {
  if (isBrowser && window.matchMedia) {
    return window.matchMedia(media).matches;
  }
  // Fallback logic for server-side rendering
  return false; // Default to false if not in a browser
};

/**
 * Get the current screen size
 *
 * @returns {string} The current screen size
 * @example
 * getScreenSize(); // 'mobile'
 */
export const getScreenSize = (): ScreenSize => {
  if (match('(max-width: 600px)')) {
    return ScreenSize.MOBILE;
  }
  if (match('(min-width: 600px) and (max-width: 1024px)')) {
    return ScreenSize.TABLET;
  }
  return ScreenSize.DESKTOP;
};

export const size = new Store<ScreenSize>(getScreenSize());
export const isDesktop = new Store(size.get() === ScreenSize.DESKTOP);
export const isTablet = new Store(size.get() === ScreenSize.TABLET);
export const isMobile = new Store(size.get() === ScreenSize.MOBILE);
export const orientation = new Store(match('(orientation: landscape)') ? 'landscape' : 'portrait');
export const isKeyboardOpen = new Store(false);
export const theme = new Store(match('(prefers-color-scheme: dark)') ? 'dark' : 'light');

//#region EVENT LISTENERS
if (isBrowser) {
  window.addEventListener('resize', () => {
    size.set(getScreenSize());
    isDesktop.set(size.get() === ScreenSize.DESKTOP);
    isTablet.set(size.get() === ScreenSize.TABLET);
    isMobile.set(size.get() === ScreenSize.MOBILE);
  });

  window.addEventListener('orientationchange', () => {
    const landscape = match('(orientation: landscape)');
    orientation.set(landscape ? 'landscape' : 'portrait');
  });

  window.addEventListener('keyboardDidShow', () => {
    isKeyboardOpen.set(true);
  });

  window.addEventListener('keyboardDidHide', () => {
    isKeyboardOpen.set(false);
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      theme.set(e.matches ? 'dark' : 'light');
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      theme.set(e.matches ? 'light' : 'dark');
    });
  }
}
//#endregion EVENT LISTENERS
