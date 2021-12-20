import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"A website for recycling and collecting scraps\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/bundle/start-7925f28f.js",
			css: [assets + "/bundle/assets/start-464e9d0a.css"],
			js: [assets + "/bundle/start-7925f28f.js",assets + "/bundle/chunks/vendor-31c8eaa5.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/bundle/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"img/background.jpeg","size":344972,"type":"image/jpeg"},{"file":"img/icons/award-solid.svg","size":1672,"type":"image/svg+xml"},{"file":"img/icons/heart-solid.svg","size":437,"type":"image/svg+xml"},{"file":"img/icons/redeem-solid.svg","size":1249,"type":"image/svg+xml"},{"file":"img/icons/share-solid.svg","size":547,"type":"image/svg+xml"},{"file":"img/icons/trash-solid.svg","size":464,"type":"image/svg+xml"},{"file":"img/logo.png","size":69440,"type":"image/png"},{"file":"img/qr_img.png","size":7017,"type":"image/png"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/seller\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/seller\/bin-locations\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/bin-locations/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/seller\/bin-locations\/connecting\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/bin-locations/connecting.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/seller\/bin-locations\/connected\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/bin-locations/connected.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/seller\/exchange\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/exchange.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/buyer\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/buyer/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/seller/__layout.svelte": () => import("..\\..\\src\\routes\\seller\\__layout.svelte"),"src/routes/seller/index.svelte": () => import("..\\..\\src\\routes\\seller\\index.svelte"),"src/routes/seller/bin-locations/index.svelte": () => import("..\\..\\src\\routes\\seller\\bin-locations\\index.svelte"),"src/routes/seller/bin-locations/connecting.svelte": () => import("..\\..\\src\\routes\\seller\\bin-locations\\connecting.svelte"),"src/routes/seller/bin-locations/connected.svelte": () => import("..\\..\\src\\routes\\seller\\bin-locations\\connected.svelte"),"src/routes/seller/exchange.svelte": () => import("..\\..\\src\\routes\\seller\\exchange.svelte"),"src/routes/buyer/index.svelte": () => import("..\\..\\src\\routes\\buyer\\index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-7840959c.js","css":["assets/pages/__layout.svelte-df7417d7.css"],"js":["pages/__layout.svelte-7840959c.js","chunks/vendor-31c8eaa5.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-0ec05774.js","css":[],"js":["error.svelte-0ec05774.js","chunks/vendor-31c8eaa5.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-60c703d5.js","css":["assets/pages/index.svelte-1973f47a.css"],"js":["pages/index.svelte-60c703d5.js","chunks/vendor-31c8eaa5.js"],"styles":[]},"src/routes/seller/__layout.svelte":{"entry":"pages/seller/__layout.svelte-a772f3ec.js","css":["assets/pages/seller/__layout.svelte-210c3911.css"],"js":["pages/seller/__layout.svelte-a772f3ec.js","chunks/vendor-31c8eaa5.js"],"styles":[]},"src/routes/seller/index.svelte":{"entry":"pages/seller/index.svelte-b7973ef4.js","css":[],"js":["pages/seller/index.svelte-b7973ef4.js","chunks/vendor-31c8eaa5.js"],"styles":[]},"src/routes/seller/bin-locations/index.svelte":{"entry":"pages/seller/bin-locations/index.svelte-4a49158c.js","css":["assets/pages/seller/bin-locations/index.svelte-02f665d3.css"],"js":["pages/seller/bin-locations/index.svelte-4a49158c.js","chunks/vendor-31c8eaa5.js"],"styles":[]},"src/routes/seller/bin-locations/connecting.svelte":{"entry":"pages/seller/bin-locations/connecting.svelte-00557684.js","css":[],"js":["pages/seller/bin-locations/connecting.svelte-00557684.js","chunks/vendor-31c8eaa5.js"],"styles":[]},"src/routes/seller/bin-locations/connected.svelte":{"entry":"pages/seller/bin-locations/connected.svelte-6f02d345.js","css":["assets/pages/seller/bin-locations/connected.svelte-db6d89f1.css"],"js":["pages/seller/bin-locations/connected.svelte-6f02d345.js","chunks/vendor-31c8eaa5.js"],"styles":[]},"src/routes/seller/exchange.svelte":{"entry":"pages/seller/exchange.svelte-ec9f52a5.js","css":["assets/pages/seller/exchange.svelte-3ab9e40d.css"],"js":["pages/seller/exchange.svelte-ec9f52a5.js","chunks/vendor-31c8eaa5.js"],"styles":[]},"src/routes/buyer/index.svelte":{"entry":"pages/buyer/index.svelte-0e1ab116.js","css":[],"js":["pages/buyer/index.svelte-0e1ab116.js","chunks/vendor-31c8eaa5.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/bundle/" + entry,
		css: css.map(dep => assets + "/bundle/" + dep),
		js: js.map(dep => assets + "/bundle/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}