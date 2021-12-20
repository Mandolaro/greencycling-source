import { c as create_ssr_component, a as each, e as escape, v as validate_component, b as add_attribute } from "./app-c055211a.js";
import "@sveltejs/kit/ssr";
const Share = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${[
    "fixed inset-0 bg-black bg-opacity-90 z-20 flex justify-center items-center",
    "hidden"
  ].join(" ").trim()}"><div class="${"p-7 w-96 bg-white rounded-xl"}"><h3 class="${"text-center text-lg font-semibold"}">Share</h3>
        ${each(["Facebook", "Twitter", "Instagram", "Reddit", "WhatsApp"], (page) => `<div class="${"flex justify-between items-center mt-7"}"><p class="${"mr"}">${escape(page)}</p>
            <div class="${"btn p-2 bg-blue-600 hover:bg-blue-800 rounded-md text-white"}">Share</div>
        </div>`)}</div></div>

<div class="${"fixed right-8 bottom-8 p-5 rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-800"}"><svg aria-hidden="${"true"}" focusable="${"false"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"><path fill="${"white"}" d="${"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"}"></path></svg></div>`;
});
var About_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".header.svelte-z41zws{font-size:1.25rem;font-weight:700;line-height:1.75rem;margin-bottom:2rem;margin-left:auto;margin-right:auto;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.header.svelte-z41zws:before{height:6rem;margin-top:-6rem}.header.svelte-z41zws:after,.header.svelte-z41zws:before{content:var(--tw-content);display:block}.header.svelte-z41zws:after{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));height:.25rem;left:-.75rem;position:absolute;right:-.75rem}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="${"mx-auto p-12 max-w-3xl"}"><section><h1 id="${"about"}" class="${"header svelte-z41zws"}">About us</h1>
        <p class="${"mb-4"}">Molestiae odio eius omnis nemo quos, magni esse. Vel eum quod
            temporibus, consectetur voluptatum quo recusandae iste asperiores et
            officiis eius dolorum, sed exercitationem similique quisquam
            assumenda ipsam corrupti. Atque.
        </p>
        <p class="${"mb-4"}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et cum
            consectetur beatae consequuntur porro nobis accusamus officia rem
            possimus! Iure earum praesentium, eaque facere architecto eveniet
            quis ut fugit nostrum!
        </p>
        <p class="${"mb-4"}">Consectetur voluptate repellendus nulla odit dolorum asperiores id
            fuga blanditiis corporis aut itaque debitis quidem quisquam error
            eaque, similique adipisci consequuntur voluptatem sapiente
            obcaecati! Quis, iure! Odio maxime quidem eveniet!
        </p></section>
    <section><h1 class="${"header svelte-z41zws"}">Our mission</h1>
        <p class="${"mb-4"}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            commodi soluta dolores molestias iste ea laboriosam veritatis dicta
            laborum nemo magni nobis voluptatum quis nulla voluptates, numquam
            aliquam voluptas ipsam.
        </p>
        <p class="${"mb-4"}">Perspiciatis laboriosam excepturi praesentium molestiae vel
            asperiores magni libero rem distinctio id! Corporis dolores quo illo
            ipsum rem perspiciatis quos harum mollitia tempora nihil nobis
            incidunt, error non molestias nostrum.
        </p>
        <p class="${"mb-4"}">Officiis inventore rerum doloremque, in similique consequuntur
            adipisci facilis excepturi incidunt fugiat enim voluptatum alias
            ullam ex consectetur mollitia, architecto repellat totam quam ipsam
            quod tenetur voluptates itaque? Dolor, est.
        </p></section>
</article>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-p2ohuu{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow-color:#0891b2;--tw-shadow:var(--tw-shadow-colored);background-color:rgb(8 145 178/var(--tw-bg-opacity));border-radius:.375rem;color:rgb(255 255 255/var(--tw-text-opacity));display:inline-block;padding:1rem;text-align:center;width:8rem}.btn.svelte-p2ohuu:hover{--tw-bg-opacity:1;--tw-shadow-color:#155e75;--tw-shadow:var(--tw-shadow-colored);background-color:rgb(21 94 117/var(--tw-bg-opacity))}.btn-pink.svelte-p2ohuu{--tw-bg-opacity:1;--tw-shadow-color:#db2777;--tw-shadow:var(--tw-shadow-colored);background-color:rgb(219 39 119/var(--tw-bg-opacity))}.btn-pink.svelte-p2ohuu:hover{--tw-bg-opacity:1;--tw-shadow-color:#9d174d;--tw-shadow:var(--tw-shadow-colored);background-color:rgb(157 23 77/var(--tw-bg-opacity))}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  let newusername = "";
  let email = "";
  let newpassword = "";
  let confirm = "";
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Welcome to GREENCYCLING</title>`, ""}`, ""}

<div class="${"fixed z-10 bg-white inset-x-0 top-0 h-24 bg-opacity-60 backdrop-blur-2xl"}"><div class="${"flex items-center justify-between max-w-5xl h-full mx-auto px-8"}"><h1 class="${"font-bold text-xl"}">GREENCYCLING</h1>
        ${`<div class="${"flex items-center"}"><div class="${"mr-10 cursor-pointer hover:underline"}">Sign up
                </div>
                <div class="${"btn btn-pink svelte-p2ohuu"}" href="${"#"}">Sign in
                </div></div>`}</div></div>

<div class="${"h-screen relative"}"><div class="${"absolute inset-8 bottom-8 top-24 overflow-hidden"}"><img src="${"/img/background.jpeg"}" alt="${"background"}" class="${"h-full object-cover mx-auto rounded-2xl"}">
        <div class="${"absolute flex justify-center items-center inset-0"}"><div class="${"p-10 bg-white bg-opacity-40 backdrop-blur-xl rounded-xl flex flex-col items-center"}"><h1 class="${"font-bold md:text-4xl text-2xl mb-4"}">Welcome to</h1>
                <h1 class="${"font-bold md:text-5xl text-3xl"}">GREENCYCLING</h1>
                <div class="${["space-x-10 mt-10 overflow-hidden flex", ""].join(" ").trim()}"><a class="${"btn svelte-p2ohuu"}" href="${"#about"}">About us</a>
                    <div class="${"btn btn-pink svelte-p2ohuu"}">Get started</div></div></div></div></div></div>

${validate_component(Share, "Share").$$render($$result, {}, {}, {})}
${validate_component(About, "About").$$render($$result, {}, {}, {})}

<div class="${[
    "fixed inset-0 bg-black bg-opacity-90 z-20 flex justify-center items-center",
    "hidden"
  ].join(" ").trim()}"><div class="${"absolute inset-0"}"></div>
    <div class="${"p-7 bg-white rounded-xl z-30"}"><h3 class="${"text-lg text-center font-semibold mb-7"}">Login</h3>
        <form><div class="${"flex items-center justify-between mb-7 space-x-7"}"><label for="${"username-inp"}">Username</label><input type="${"text"}" required id="${"username-inp"}" class="${"border-gray-300 p-2 border-2 rounded-md"}"${add_attribute("value", username, 0)}></div>
            <div class="${"flex items-center justify-between mb-7 space-x-7"}"><label for="${"password-inp"}">Password</label><input type="${"password"}" required id="${"password-inp"}" class="${"border-gray-300 p-2 border-2 rounded-md"}"${add_attribute("value", password, 0)}></div>
            <button type="${"submit"}" class="${"btn float-right svelte-p2ohuu"}">Login</button></form></div></div>

<div class="${[
    "fixed inset-0 bg-black bg-opacity-90 z-20 flex justify-center items-center",
    "hidden"
  ].join(" ").trim()}"><div class="${"absolute inset-0"}"></div>
    <div class="${"p-7 bg-white rounded-xl z-30"}"><h3 class="${"text-lg text-center font-semibold mb-7"}">Login</h3>
        <form><div class="${"flex items-center justify-between mb-7 space-x-7"}"><label for="${"new-username-inp"}">Username</label><input type="${"text"}" required id="${"new-username-inp"}" class="${"border-gray-300 p-2 border-2 rounded-md"}"${add_attribute("value", newusername, 0)}></div>
            <div class="${"flex items-center justify-between mb-7 space-x-7"}"><label for="${"email-inp"}">Email</label><input type="${"text"}" required id="${"email-inp"}" class="${"border-gray-300 p-2 border-2 rounded-md"}"${add_attribute("value", email, 0)}></div>
            <div class="${"flex items-center justify-between mb-7 space-x-7"}"><label for="${"new-password-inp"}">Password</label><input type="${"password"}" required id="${"new-password-inp"}" class="${"border-gray-300 p-2 border-2 rounded-md"}"${add_attribute("value", newpassword, 0)}></div>
            <div class="${"flex items-center justify-between mb-7 space-x-7"}"><label for="${"new-password-verify"}">Confirm Password</label><input type="${"password"}" required id="${"new-password-verify"}" class="${"border-gray-300 p-2 border-2 rounded-md"}"${add_attribute("pattern", newpassword, 0)}${add_attribute("value", confirm, 0)}></div>
            <button type="${"submit"}" class="${"btn float-right svelte-p2ohuu"}">Login</button></form></div>
</div>`;
});
export { Routes as default };
