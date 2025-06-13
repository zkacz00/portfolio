import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x'
		}),
		paths: {
			// base: process.env.NODE_ENV === 'production' ? '/zkacz00-portfolio' : '',
			base: process.env.NODE_ENV === 'production' ? '' : '',
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore all 404 errors during build
				if (path.startsWith('/images/') || message.includes('Not found')) {
					console.warn(`Warning: Asset not found: ${path}`);
					return;
				}
				// Otherwise throw the error
				throw new Error(message);
			}
		}
	}
};

export default config;
