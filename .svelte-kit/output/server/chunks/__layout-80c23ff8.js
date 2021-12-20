import { g as getContext, c as create_ssr_component, s as subscribe, a as each, b as add_attribute, e as escape } from "./app-c055211a.js";
import "@sveltejs/kit/ssr";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-1ven3eg{--tw-bg-opacity:1;background-color:rgb(96 165 250/var(--tw-bg-opacity))}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const hrefs = ["bin-locations", "exchange"];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>RECYCLER | GREENCYCLING</title>`, ""}`, ""}

<nav class="${"fixed bg-white flex h-min justify-between md:justify-start md:flex-col md:h-screen md:w-96 w-screen"}"><div class="${"flex justify-center items-center overflow-hidden"}"><a sveltekit:prefetch href="${"/"}" class="${"md:text-2xl font-semibold mx-4 md:p-6 md:mb-4"}">GREENCYCLING</a></div>

    <div class="${"flex md:flex-col md:space-y-4"}"><a sveltekit:prefetch href="${"/seller"}" class="${[
    "p-4 md:mx-6 md:rounded-md hover:bg-blue-200 svelte-1ven3eg",
    $page.path == "/seller" ? "active" : ""
  ].join(" ").trim()}">SUMMARY</a>
        ${each(hrefs, (href) => `<a sveltekit:prefetch${add_attribute("href", "/seller/" + href, 0)} class="${[
    "p-4 md:rounded-md md:mx-6 hover:bg-blue-200 svelte-1ven3eg",
    $page.path == "/seller/" + href ? "active" : ""
  ].join(" ").trim()}">${escape(href.split("-").join(" ").toUpperCase())}</a>`)}</div></nav>
<div class="${"bg-gray-200 min-h-screen h-full md:ml-96 px-10 md:py-10 py-24"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export { _layout as default };
