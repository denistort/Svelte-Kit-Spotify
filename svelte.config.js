import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		scss: {
			prependData: `
			@use 'src/styles/functions';
			@use 'src/styles/_breakpoints' as breakpoint;
			@use 'src/styles/abstracts/_colors';
			@use 'src/styles/abstracts/_sizes.scss';
			@use 'src/styles/mixins/_mixins.scss' as mix;
			`
		}
	}),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$shared: 'src/lib/shared',
			$assets: 'scr/assets/',
			$actions: 'src/actions'
		}
	}
};

export default config;
