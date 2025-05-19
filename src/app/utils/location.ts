// /**
//  * Get query params from url
//  *
//  * @param {string} url The url to get the query params from
//  * @returns {Record<string, string>} The query params
//  * @example
//  * getQueryParams('https://example.com?foo=bar'); // { foo: 'bar' }
//  */
// export const getQueryParams = (): Record<string, string> => {
//   const params: Record<string, string> = {};
//   const search = location.search.substring(1);
//   for (const pair of search.split('&')) {
//     const [key, value] = pair.split('=');
//     params[key] = value;
//   }
//   return params;
// };

// import { page, params } from '../stores/router';
// import { urlParamsToRecord } from './objects';
// import { metaTags } from '../content/metaTags';

// /**
//  * Navigate to a new url
//  *
//  * @param {string} url The url to navigate to
//  * @param {boolean} [append=false] Whether to append to existing query parameters or replace them
//  * @example
//  * goto('/home/'); // navigates to /home/
//  * goto('/blog/?tag=example', true); // appends 'tag=example' to existing search params without replacing them
//  * goto('mailto:someone@example.com'); // opens email client to send an email
//  */
// export const goto = (url: string, append: boolean = false): void => {
//   if (typeof window === 'undefined') {
//     global.window = {} as any;
//   }

//   if (url.startsWith('mailto:')) {
//     window.location.href = url; // Directly open the mail client
//     return;
//   }
//   const nextUrl = new URL(url, window.location.href);
//   const urlKey = nextUrl.pathname === '/' ? 'home' : nextUrl.pathname.replace(/\//g, '');
//   const title = metaTags[urlKey] ? metaTags[urlKey].title : '';
//   if (url.includes('http')) return window.location.assign(url);
//   if (append) {
//     const { pathname, search } = window.location;
//     const currentParams = new URLSearchParams(search);
//     const newParams = new URLSearchParams(url.includes('?') ? url.split('?')[1] : '');
//     newParams.forEach((value, key) => currentParams.set(key, value));
//     page.set(pathname);
//     params.set(urlParamsToRecord(currentParams));
//     url = pathname + '?' + currentParams.toString();
//   }
//   window.history.pushState({}, title, url);
//   window.dispatchEvent(new Event('popstate'));
// };
