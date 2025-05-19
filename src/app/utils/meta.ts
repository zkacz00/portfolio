import { type OpenGraphImage } from '../types/meta';

/**
 * Get image meta data for Open Graph.
 * @param {string} url - The image URL.
 * @param {string} alt - The image alt text.
 * @returns {OpenGraphImage} OpenGraphImage - The image meta data.
 */
export const getImageMeta = (url: string, alt: string): OpenGraphImage => {
  return {
    url: `${url}?fm=png&q=100&fit=fill&f=center&w=448&h=256`,
    width: 448,
    height: 256,
    alt,
  };
};
