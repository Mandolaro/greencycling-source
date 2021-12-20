import { c as create_ssr_component, e as escape, b as add_attribute, a as each } from "./app-c055211a.js";
import "@sveltejs/kit/ssr";
var exchange_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-8cfigm{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(22 163 74/var(--tw-bg-opacity));border-radius:.5rem;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:1.125rem;font-weight:700;line-height:1.75rem;padding:.5rem 1rem;text-align:center;width:6rem}.btn.svelte-8cfigm:hover{--tw-bg-opacity:1;background-color:rgb(22 101 52/var(--tw-bg-opacity))}.btn-disabled.svelte-8cfigm{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity));pointer-events:none}.btn-disabled.svelte-8cfigm:hover{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}",
  map: null
};
const Exchange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let orgs = ["Red Cross", "Change Vietnam", "WWF"];
  let val = 0;
  let valredeem = 0;
  $$result.css.add(css);
  return `<div class="${"w-fit"}"><h1 class="${"w-fit mx-auto text-center p-7 bg-white rounded-lg text-6xl"}">124 Points</h1>
    <div class="${"flex flex-wrap w-fit"}"><div class="${"flex-grow mx-10 mt-10 flex flex-col"}"><h1 class="${"mb-5 text-center font-semibold text-2xl"}">Donate</h1>
            <div class="${"bg-white mx-auto md:mx-0 p-7 rounded-2xl flex-grow"}"><h2 class="${"text-center text-xl"}">${escape(val)}</h2>
                <input type="${"range"}" min="${"0"}" max="${"124"}" class="${"w-full min-w-[20rem] mb-5"}"${add_attribute("value", val, 0)}>
                <div>${each(orgs, (org) => `<div class="${"flex flex-row justify-between items-center mt-5"}"><div>${escape(org)}</div>
                            <a href="${"/seller"}" class="${["btn svelte-8cfigm", "btn-disabled"].join(" ").trim()}">Donate</a>
                        </div>`)}</div></div></div>

        <div class="${"flex-grow mx-10 mt-10 flex flex-col"}"><h1 class="${"mb-5 text-center font-semibold text-2xl"}">Redeem</h1>
            <div class="${"bg-white mx-auto md:mx-0 p-7 rounded-2xl flex-grow flex flex-col justify-between items-end"}"><div class="${"w-full"}"><h2 class="${"text-center text-xl"}">${escape(valredeem)}</h2>
                    <input type="${"range"}" min="${"0"}" max="${"124"}" class="${"w-full mb-10 min-w-[20rem]"}"${add_attribute("value", valredeem, 0)}></div>
                <a href="${"/seller"}" class="${["btn float-right svelte-8cfigm", "btn-disabled"].join(" ").trim()}">Ok</a></div></div></div>
</div>`;
});
export { Exchange as default };
