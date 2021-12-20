import { c as create_ssr_component, a as each, e as escape } from "./app-c055211a.js";
import "@sveltejs/kit/ssr";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-4fa44n{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(22 163 74/var(--tw-bg-opacity));border-radius:.5rem;color:rgb(255 255 255/var(--tw-text-opacity));font-size:1.125rem;font-weight:700;line-height:1.75rem;padding:.5rem 1rem;text-align:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.btn.svelte-4fa44n:hover{--tw-bg-opacity:1;background-color:rgb(22 101 52/var(--tw-bg-opacity))}.btn-disabled.svelte-4fa44n{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.btn-disabled.svelte-4fa44n:hover{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}",
  map: null
};
const Bin_locations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected = "nearest";
  const locations = {
    nearest: [
      `Distance: 120m
Address: 605 Hillcrest St.`,
      `Distance: 270m
Address: 524 Cherry St.`,
      `Distance: 557m
Address: 2 Harvard St.`
    ],
    recent: [
      `Distance: 120m
Address: 605 Hillcrest St.`,
      `Distance: 557m
Address: 2 Harvard St.`,
      `Distance: 1.4km
Address: 7764 South Green Hill St.`
    ]
  };
  locations.all = [...new Set(locations.nearest.concat(locations.recent))];
  $$result.css.add(css);
  return `<h3 class="${"text-xl font-semibold"}"><select class="${"p-1 border-2 border-gray-300 bg-white rounded-md"}"><option value="${"nearest"}">Nearest bins</option><option value="${"recent"}">Recently connected bins</option><option value="${"all"}">All bins</option></select></h3>
    <div class="${"bg-white rounded-2xl p-7 mt-10"}"><pre class="${"mt-4 mb-10 whitespace-pre-wrap"}">Distance: 5m
Address: 520 NE. Edgemont Ave.
    </pre>
        <a sveltekit:prefetch href="${"/seller/bin-locations/connecting/"}" class="${"btn mr-10 svelte-4fa44n"}">Connect</a></div>

${each(locations[selected], (place) => `<div class="${"bg-white rounded-2xl p-7 mt-10"}"><pre class="${"mt-4 mb-10 whitespace-pre-wrap"}">${escape(place)}</pre>
    <div class="${"btn btn-disabled mr-10 svelte-4fa44n"}">Connect
    </div>
</div>`)}`;
});
export { Bin_locations as default };
