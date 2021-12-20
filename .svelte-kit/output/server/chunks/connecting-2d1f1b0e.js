import { c as create_ssr_component, e as escape, b as add_attribute } from "./app-c055211a.js";
import "@sveltejs/kit/ssr";
const Connecting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let link;
  let dotcount = 0;
  return `<div class="${"p-7 w-fit bg-white rounded-2xl mx-auto flex flex-col mt-10"}"><img src="${"/img/qr_img.png"}" alt="${"QR code to connect"}" width="${"256"}" height="${"256"}">
    <div class="${"mt-4 flex justify-between items-center"}"><p>Connecting${escape(".".repeat(dotcount))}</p>
        <button class="${"p-3 bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-md"}" href="${"https://www.google.com/maps/dir/2%2F19+Ph%E1%BA%A1m+V%C4%83n+B%E1%BA%A1ch,+Ph%C6%B0%E1%BB%9Dng+15,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/A75+%C4%90.+B%E1%BA%A1ch+%C4%90%E1%BA%B1ng,+Ph%C6%B0%E1%BB%9Dng+2,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.8197605,106.6387357,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x31752966f7abb3e5:0x965e8833d2d98984!2m2!1d106.637801!2d10.817937!1m5!1m1!1s0x317529193724a1c5:0x4795b3f7e8f44068!2m2!1d106.669803!2d10.81642!3e0"}">Locate</button></div>
    <a href="${"/seller/bin-locations/connected"}" sveltekit:prefetch hidden${add_attribute("this", link, 0)}>_</a></div>

<div class="${[
    "fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center",
    "hidden"
  ].join(" ").trim()}"><iframe title="${"direction"}" class="${"p-6 rounded-2xl bg-white"}" src="${"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62702.991146189685!2d106.62122575071037!3d10.816137377341322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x31752966f7abb3e5%3A0x965e8833d2d98984!2zMi8xOSBQaOG6oW0gVsSDbiBC4bqhY2gsIFBoxrDhu51uZyAxNSwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!3m2!1d10.817936999999999!2d106.637801!4m5!1s0x317529193724a1c5%3A0x4795b3f7e8f44068!2zQTc1IMSQLiBC4bqhY2ggxJDhurFuZywgUGjGsOG7nW5nIDIsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!3m2!1d10.816419999999999!2d106.669803!5e0!3m2!1sen!2s!4v1639722019404!5m2!1sen!2s"}" width="${"600"}" height="${"450"}" style="${"border:0;"}" allowfullscreen="${""}" loading="${"lazy"}"></iframe></div>`;
});
export { Connecting as default };
