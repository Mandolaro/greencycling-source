import { respond } from "@sveltejs/kit/ssr";
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
Promise.resolve();
const escaped = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
const missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function afterUpdate() {
}
var root_svelte_svelte_type_style_lang = "";
const css = {
  code: "#svelte-announcer.svelte-1pdgbjn{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}",
  map: null
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  let { props_3 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  if ($$props.props_3 === void 0 && $$bindings.props_3 && props_3 !== void 0)
    $$bindings.props_3(props_3);
  $$result.css.add(css);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {
        default: () => `${components[3] ? `${validate_component(components[3] || missing_component, "svelte:component").$$render($$result, Object.assign(props_3 || {}), {}, {})}` : ``}`
      })}` : ``}`
    })}` : ``}`
  })}

${``}`;
});
let base = "";
let assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="description" content="A website for recycling and collecting scraps" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
let options = null;
const default_settings = { paths: { "base": "", "assets": "" } };
function init(settings = default_settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  const hooks = get_hooks(user_hooks);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: assets + "/bundle/start-7925f28f.js",
      css: [assets + "/bundle/assets/start-464e9d0a.css"],
      js: [assets + "/bundle/start-7925f28f.js", assets + "/bundle/chunks/vendor-31c8eaa5.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => assets + "/bundle/" + entry_lookup[id],
    get_stack: (error) => String(error),
    handle_error: (error, request) => {
      hooks.handleError({ error, request });
      error.stack = options.get_stack(error);
    },
    hooks,
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    prerender: true,
    read: settings.read,
    root: Root,
    service_worker: null,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
const empty = () => ({});
const manifest = {
  assets: [{ "file": "img/background.jpeg", "size": 344972, "type": "image/jpeg" }, { "file": "img/icons/award-solid.svg", "size": 1672, "type": "image/svg+xml" }, { "file": "img/icons/heart-solid.svg", "size": 437, "type": "image/svg+xml" }, { "file": "img/icons/redeem-solid.svg", "size": 1249, "type": "image/svg+xml" }, { "file": "img/icons/share-solid.svg", "size": 547, "type": "image/svg+xml" }, { "file": "img/icons/trash-solid.svg", "size": 464, "type": "image/svg+xml" }, { "file": "img/logo.png", "size": 69440, "type": "image/png" }, { "file": "img/qr_img.png", "size": 7017, "type": "image/png" }],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/seller\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/seller\/bin-locations\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/bin-locations/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/seller\/bin-locations\/connecting\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/bin-locations/connecting.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/seller\/bin-locations\/connected\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/bin-locations/connected.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/seller\/exchange\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/seller/__layout.svelte", "src/routes/seller/exchange.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/buyer\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/buyer/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve }) => resolve(request)),
  handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
  externalFetch: hooks.externalFetch || fetch
});
const module_lookup = {
  "src/routes/__layout.svelte": () => import("./__layout-0350fcd0.js"),
  ".svelte-kit/build/components/error.svelte": () => import("./error-8e5f0bdb.js"),
  "src/routes/index.svelte": () => import("./index-03e42bff.js"),
  "src/routes/seller/__layout.svelte": () => import("./__layout-80c23ff8.js"),
  "src/routes/seller/index.svelte": () => import("./index-5a8f7fb0.js"),
  "src/routes/seller/bin-locations/index.svelte": () => import("./index-c770ffb2.js"),
  "src/routes/seller/bin-locations/connecting.svelte": () => import("./connecting-2d1f1b0e.js"),
  "src/routes/seller/bin-locations/connected.svelte": () => import("./connected-cb6350a6.js"),
  "src/routes/seller/exchange.svelte": () => import("./exchange-74e055c6.js"),
  "src/routes/buyer/index.svelte": () => import("./index-5ef80d01.js")
};
const metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-7840959c.js", "css": ["assets/pages/__layout.svelte-df7417d7.css"], "js": ["pages/__layout.svelte-7840959c.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, ".svelte-kit/build/components/error.svelte": { "entry": "error.svelte-0ec05774.js", "css": [], "js": ["error.svelte-0ec05774.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-60c703d5.js", "css": ["assets/pages/index.svelte-1973f47a.css"], "js": ["pages/index.svelte-60c703d5.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, "src/routes/seller/__layout.svelte": { "entry": "pages/seller/__layout.svelte-a772f3ec.js", "css": ["assets/pages/seller/__layout.svelte-210c3911.css"], "js": ["pages/seller/__layout.svelte-a772f3ec.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, "src/routes/seller/index.svelte": { "entry": "pages/seller/index.svelte-b7973ef4.js", "css": [], "js": ["pages/seller/index.svelte-b7973ef4.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, "src/routes/seller/bin-locations/index.svelte": { "entry": "pages/seller/bin-locations/index.svelte-4a49158c.js", "css": ["assets/pages/seller/bin-locations/index.svelte-02f665d3.css"], "js": ["pages/seller/bin-locations/index.svelte-4a49158c.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, "src/routes/seller/bin-locations/connecting.svelte": { "entry": "pages/seller/bin-locations/connecting.svelte-00557684.js", "css": [], "js": ["pages/seller/bin-locations/connecting.svelte-00557684.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, "src/routes/seller/bin-locations/connected.svelte": { "entry": "pages/seller/bin-locations/connected.svelte-6f02d345.js", "css": ["assets/pages/seller/bin-locations/connected.svelte-db6d89f1.css"], "js": ["pages/seller/bin-locations/connected.svelte-6f02d345.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, "src/routes/seller/exchange.svelte": { "entry": "pages/seller/exchange.svelte-ec9f52a5.js", "css": ["assets/pages/seller/exchange.svelte-3ab9e40d.css"], "js": ["pages/seller/exchange.svelte-ec9f52a5.js", "chunks/vendor-31c8eaa5.js"], "styles": [] }, "src/routes/buyer/index.svelte": { "entry": "pages/buyer/index.svelte-0e1ab116.js", "css": [], "js": ["pages/buyer/index.svelte-0e1ab116.js", "chunks/vendor-31c8eaa5.js"], "styles": [] } };
async function load_component(file) {
  const { entry, css: css2, js, styles } = metadata_lookup[file];
  return {
    module: await module_lookup[file](),
    entry: assets + "/bundle/" + entry,
    css: css2.map((dep) => assets + "/bundle/" + dep),
    js: js.map((dep) => assets + "/bundle/" + dep),
    styles
  };
}
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
export { each as a, add_attribute as b, create_ssr_component as c, escape as e, getContext as g, init as i, render as r, subscribe as s, validate_component as v };
