import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import mdsvexConfig from "./mdsvex.config.js";
import { mdsvex } from "mdsvex";

const config = {
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

  extensions: [".svelte", ".svx", ...mdsvexConfig.extensions],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
  },
};

export default config;
