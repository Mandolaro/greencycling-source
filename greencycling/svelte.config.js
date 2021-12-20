import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    paths: {
			base: dev ? '' : '', //'/greencycling',
		},
		
		appDir: 'bundle',
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
