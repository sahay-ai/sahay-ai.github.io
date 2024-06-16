/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderSlot, j as renderComponent, F as Fragment } from '../astro_618a73d7.mjs';
import 'clsx';
import { g as getCollection } from './_slug__fde55e49.mjs';
import { a as $$Container, $ as $$Layout } from './404_c7606d67.mjs';

const $$Astro$1 = createAstro("https://sahayai.github.io");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </h1> <p class="text-lg mt-4 text-slate-600"> ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)} </p> </div>`;
}, "/home/jet/website/src/components/sectionhead.astro", void 0);

const $$Astro = createAstro("https://sahayai.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a small passionate team.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About` })}` })} ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"> <h2 class="font-bold text-3xl text-gray-800">
We use robots to automate inspections.
</h2> <div class="mt-8 text-lg leading-relaxed text-gray-800"> <h2><b> Our Mission</b></h2> <p>
Welcome to Sahay AI, where we are dedicated to transforming the future of rail inspections through the power of physical AI. Our mission is to enhance the safety, efficiency, and reliability of railway systems worldwide.
</p> <br> <h2><b> Mission Statement </b></h2> <p>
Currently, the railway infrastructure faces numerous challenges:
</p><ul class="list-disc ml-5"> <li><b>Aging and Defective Infrastructure:</b> Many railway tracks are old and deteriorating, leading to increased risks and maintenance needs.</li> <li><b>Unstructured Inspections:</b> Current inspection methods are often manual, inconsistent, and lack standardization, resulting in missed or overlooked defects.</li> <li><b>Backlog of Maintenance:</b> Due to inefficient inspection processes, there is a significant backlog of maintenance tasks that need to be addressed.</li> <li><b>Safety Risks:</b> Defective tracks and delayed maintenance increase the likelihood of accidents and derailments, putting lives at risk.</li> <li><b>Operational Delays:</b> Frequent delays due to track issues lead to substantial operational costs and loss of revenue for railway companies.</li> <li><b>Remote Access Challenges:</b> Inspecting tracks in remote or hard-to-reach areas is difficult, further complicating maintenance efforts.</li> </ul>  <br> <h2><b> Our Solution </b></h2> <p>
Sahay AI addresses these challenges with a comprehensive approach that leverages advanced technology to revolutionize rail inspections. Our solution includes:
</p><ul class="list-disc ml-5"> <li><b>AI-Powered Inspections:</b> Utilizing AI to perform thorough and accurate inspections, identifying defects that might be missed by manual methods.</li> <li><b>Real-Time Data Analysis:</b> Implementing real-time data analytics to monitor track conditions continuously, ensuring timely detection and resolution of issues.</li> <li><b>Improved Safety and Efficiency:</b> Enhancing safety by reducing the risk of accidents and improving operational efficiency through better maintenance planning.</li> </ul>  <br> <p>
Sahay AI is committed to making railway systems safer, more reliable, and more efficient. By integrating AI and Digital Twin technology, we provide a modern solution to the age-old problems of railway maintenance and inspection. Our approach not only ensures more accurate and timely inspections but also helps in predictive maintenance, reducing the overall risk and cost associated with railway operations.
</p> <br> <h2><b> Our team</b></h2> <p>
We at Sahay are a multi-cultural team from around the world! We come from diverse
          backgrounds, bringing different personalities, experiences and skill sets passionate
          about real world problems.
</p> <br> <p>
Join us in our mission to revolutionize the rail industry with innovative AI solutions!
</p> </div> </div>  ` })} ` })}`;
}, "/home/jet/website/src/pages/about.astro", void 0);

const $$file = "/home/jet/website/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, about as a };
