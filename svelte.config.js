import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: 'src/lib/components/SinglePost.svelte'
		}),
		vitePreprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
