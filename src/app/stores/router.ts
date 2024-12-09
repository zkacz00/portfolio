import Store from '../utils/store';

/* stores the current active page url */
export const page: Store<string> = new Store('/');

/* stores the current url params */
export const params: Store<Record<string, any>> = new Store({});

/* stores the current urls hash */
export const hash: Store<string> = new Store('');

/* stores the current urls meta */
export const meta: Store<Record<string, any>> = new Store({});

/* stores the page offset */
export const offset: Store<number> = new Store(0);

/* stores the current component */
export const component: Store<any> = new Store(null);

/* Watch for changes in the url */
export const watch = (callback: () => void): void => {
  const { pushState, replaceState } = window.history;

  window.history.pushState = function (data, _, url): void {
    pushState.call(window.history, data, _, url);
    window.dispatchEvent(new Event('pushState'));
  };

  window.history.replaceState = function (data, _, url): void {
    replaceState.call(window.history, data, _, url);
    window.dispatchEvent(new Event('replaceState'));
  };

  window.addEventListener('popstate', (): void => callback());
  window.addEventListener('replaceState', (): void => callback());
  window.addEventListener('pushState', (): void => callback());
  window.addEventListener('hashchange', (): void => callback());

  callback();
};

export const clean = (url: string): void => {
  if (url.includes('/index.html')) window.history.replaceState({}, '', url.replace('/index.html', '/'));
  if (url.includes('//')) window.history.replaceState({}, '', url.replace('//', '/'));
  if (!url.endsWith('/')) window.history.replaceState({}, '', `${url}/`);
};
