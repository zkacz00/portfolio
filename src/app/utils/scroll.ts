import { get } from 'svelte/store';
import { isMobile, isTablet, isDesktop } from "../stores/device";

export const scrollTo = (
  id: string,
  behavior: 'smooth' | 'auto' = 'smooth',
  offset: number | undefined = undefined
) => {
  const el = document.getElementById(id);
  if (!el) return;

  let y: number;

  if (typeof offset === 'undefined') {
    const mobile = get(isMobile);
    const tablet = get(isTablet);
    const desktop = get(isDesktop);

    offset = mobile ? -64 : tablet ? -64 : desktop ? -80 : -80;
  }

  y = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: y, behavior });
};

export const scrollToTop = (
  offset: number = 0,
  behavior: 'smooth' | 'auto' = 'smooth'
) => {
  window.scrollTo({ top: 0 + offset, behavior });
};

export const scrollToBottom = (
  offset: number = 0,
  behavior: 'smooth' | 'auto' = 'smooth'
) => {
  const scrollableHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  window.scrollTo({ top: scrollableHeight - offset, behavior });
};
