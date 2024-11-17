import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './src/*'
		}
	},

	preprocess: [mdsvex(), vitePreprocess()],
	extensions: ['.svelte', '.svx']
};

export default config;
