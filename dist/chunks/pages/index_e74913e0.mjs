/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_618a73d7.mjs';
import 'clsx';
import { c as $$Link, b as $$Picture, a as $$Container, $ as $$Layout } from './404_c7606d67.mjs';
import { $ as $$Icon } from './contact_1e336dd6.mjs';

const $$Astro$4 = createAstro("https://sahayai.github.io");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<div class="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"> <h2 class="text-white text-4xl md:text-6xl tracking-tight">
Revolutionizing safety
</h2> <p class="text-slate-400 mt-4 text-lg md:text-xl">
Sahay's Digital Twin technology enables data driven insights into inspection planning and maintenance.
</p> <div class="flex mt-5"> ${renderComponent($$result, "Link", $$Link, { "href": "#", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Get Started` })} </div> </div>`;
}, "/home/jet/website/src/components/cta.astro", void 0);

const $$Astro$3 = createAstro("https://sahayai.github.io");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Real time monitoring of tracks",
      description: "View all your track lines health on satellite maps in realtime for enhanced safety and accountability",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "Track mapping & Planning ",
      description: "Unlimited playback to ensure region by region safety. Review AI suggestions on how to strategize & plan downtime.",
      icon: "bx:bxs-window-alt"
    },
    {
      title: "Asset Management & Monitoring",
      description: "Gather more information about track surroundings and easily quanitfy asset data.  ",
      icon: "bx:bxs-data"
    },
    {
      title: "Downtime prediction",
      description: "Make calculated decisions based on our downtime prediction models for getting the rail line up and running in no time",
      icon: "bx:bxs-bot"
    },
    {
      title: "Search & Deploy",
      description: "No more sitting around waiting for the night or creating maintenance blocks, with Sahay deploy quick and easy",
      icon: "bx:bxs-file-find"
    },
    {
      title: "Safety is in our name",
      description: "Sahay stands for Sahayta - to help selflessly. Our vision is to make this industry safe and reliable via regulations",
      icon: "bx:bxs-user"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0"> <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
Make railways safer, reliable and more efficient!
</h2> <p class="text-lg mt-4 text-slate-600">
The SahayBot takes the best parts of state-of-the-art
    sensors and adds AI based suggestions.
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-lg">${item.title}</h3>${" "} <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p> </div> </div>`)} </div>`;
}, "/home/jet/website/src/components/features.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/main.ac833b31.png","width":1702,"height":1381,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://sahayai.github.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"> <div class="py-6 md:order-1 hidden md:block"> ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Astronaut in the air", "widths": [200, 400, 560], "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })} </div> <div> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
The Smart Time Machine for Inspections
</h1> <p class="text-lg mt-4 text-slate-600 max-w-xl">
Sahay deconstructs complex nuances of inspections by making them visible & actionable. <wbr>Built on AI & Digital Twin technology. Quickly
      plan and deploy maintenance teams avoiding months of backlog of the $130B industry.
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "/contact", "target": "_blank", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "ic:round-call-made" })}
Get Started
` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "https://app.sahayai.com/", "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-black w-4 h-4", "name": "ri:team-fill" })}
Login to see our demo!
` })} </div> </div> </main>`;
}, "/home/jet/website/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro("https://sahayai.github.io");
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logos;
  return renderTemplate`${maybeRenderHead()}<div class="mt-24"> <h2 class="text-center text-slate-500">Runs on the best technologies</h2> <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:probot" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:python" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-14", "name": "simple-icons:cplusplus" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-16", "name": "simple-icons:github" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:linux" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:apple" })} </div> </div>`;
}, "/home/jet/website/src/components/logos.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sahayai.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(["", ` <!-- Google tag (gtag.js) --> <script type="application/javascript" async src="https://www.googletagmanager.com/gtag/js?id=G-84RE6PTFLT"><\/script> <script type="application/javascript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-84RE6PTFLT');
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ${renderComponent($$result3, "Cta", $$Cta, {})} ` })} ` }));
}, "/home/jet/website/src/pages/index.astro", void 0);

const $$file = "/home/jet/website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
