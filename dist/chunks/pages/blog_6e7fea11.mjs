/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, F as Fragment, m as maybeRenderHead, g as addAttribute } from '../astro_618a73d7.mjs';
import { g as getCollection } from './_slug__fde55e49.mjs';
import { a as $$Container, b as $$Picture, $ as $$Layout } from './404_c7606d67.mjs';
import { $ as $$Sectionhead } from './about_ca292b1f.mjs';

const $$Astro = createAstro("https://sahayai.github.io");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const publishedBlogEntries = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  publishedBlogEntries.sort(function(a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
Here we write about our learnings, technology & cool updates at Sahay.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Our Blog` })}` })} ${maybeRenderHead()}<main class="mt-16"> <ul class="grid gap-16 max-w-4xl mx-auto"> ${publishedBlogEntries.map((blogPostEntry, index) => renderTemplate`<li> <a${addAttribute(`/blog/${blogPostEntry.slug}`, "href")}> <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center"> ${renderComponent($$result3, "Picture", $$Picture, { "src": blogPostEntry.data.image.src, "alt": blogPostEntry.data.image.alt, "sizes": "(max-width: 800px) 100vw, 800px", "width": 800, "height": 600, "loading": index <= 2 ? "eager" : "lazy", "decoding": index <= 2 ? "sync" : "async", "class": "w-full rounded-md object-cover object-center bg-white" })} <div> <span class="text-blue-400 uppercase tracking-wider text-sm font-medium"> ${blogPostEntry.data.category} </span> <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 "> ${blogPostEntry.data.title} </h2> <div class="flex gap-2 mt-3"> <span class="text-gray-400"> ${blogPostEntry.data.author} </span> <span class="text-gray-400">• </span> <time class="text-gray-400"${addAttribute(blogPostEntry.data.publishDate.toISOString(), "datetime")}> ${blogPostEntry.data.publishDate.toDateString()} </time> </div> </div> </div> </a> </li>`)} </ul> </main> ` })} ` })}`;
}, "/home/jet/website/src/pages/blog.astro", void 0);

const $$file = "/home/jet/website/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
