import { c as create_ssr_component } from "./app-c055211a.js";
import "@sveltejs/kit/ssr";
var connected_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-1h2epuf{--tw-text-opacity:1;border-radius:.5rem;color:rgb(255 255 255/var(--tw-text-opacity));font-size:1.125rem;font-weight:700;line-height:1.75rem;padding:.5rem 1rem;text-align:center}.btn-red.svelte-1h2epuf{--tw-bg-opacity:1;background-color:rgb(220 38 38/var(--tw-bg-opacity))}.btn-red.svelte-1h2epuf:hover{--tw-bg-opacity:1;background-color:rgb(153 27 27/var(--tw-bg-opacity))}.btn-blue.svelte-1h2epuf{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.btn-blue.svelte-1h2epuf:hover{--tw-bg-opacity:1;background-color:rgb(30 64 175/var(--tw-bg-opacity))}",
  map: null
};
const Connected = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"bg-white rounded-2xl p-7"}"><h3 class="${"text-xl font-semibold"}">Bin connected</h3>
    <pre class="${"mt-4 mb-5 whitespace-pre-wrap"}">Distance: 5m
Address: 520 NE. Edgemont Ave.Clemmons, NC 27012
    </pre>
    <a sveltekit:prefetch href="${"/seller/bin-locations"}" class="${"btn-red btn mr-10 mt-5 svelte-1h2epuf"}">Disconnect</a>
    <button class="${"btn-blue btn mt-5 svelte-1h2epuf"}">Deposit</button></div>

<a sveltekit:prefetch href="${"/seller/bin-locations"}" class="${[
    "fixed inset-0 opacity-90 bg-black flex justify-center items-center",
    "hidden"
  ].join(" ").trim()}"><div class="${"p-5 border w-96 shadow-lg rounded-md bg-white"}"><div class="${"mt-3 text-center"}">${`<div class="${"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100"}"><svg viewBox="${"0 0 24 24"}" class="${"w-8 h-8 text-red-500 stroke-current"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 8V12V8ZM12 16H12.01H12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></div>`}</div>
        <h3 class="${"text-lg leading-6 text-center font-medium text-gray-900"}">${`Failed!`}</h3>
        <div class="${"mt-2 px-7 py-3"}"><p class="${"text-sm text-center text-gray-500"}">${`Your scrap is contaminated`}</p></div>
        <div class="${"items-center px-4 py-3"}">${`<button class="${"px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"}">OK
            </button>`}</div></div>
</a>`;
});
export { Connected as default };
