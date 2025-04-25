export const scrollTo = (id: string, behavior: 'smooth' | 'auto' = 'smooth', offset: number = -80, ) => {
  let el = document.getElementById(id);
  if (!el) return;
  let y = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: y, behavior: behavior });
};

export const scrollToTop = (offset: number = 0, behavior: 'smooth' | 'auto' = 'smooth') => {
  window.scrollTo({ top: 0 + offset, behavior: behavior });
};

export const scrollToBottom = (offset: number = 0, behavior: 'smooth' | 'auto' = 'smooth') => {
  const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  window.scrollTo({ top: scrollableHeight - offset, behavior: behavior });
};