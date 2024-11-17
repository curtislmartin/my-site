import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './src/*'
		}
	},

	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
