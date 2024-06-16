import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_618a73d7.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"draft":false,"name":"Tejas Agarwal","title":"Founder / CEO","avatar":{"src":"https://media.licdn.com/dms/image/D4E03AQG1oMylzalJsg/profile-displayphoto-shrink_800_800/0/1701784377654?e=2147483647&v=beta&t=t_KqupTGKx5UMqItnsCcfgH3iQLi-kuex_pzhl27-kA","alt":"Tejas Agarwal"},"publishDate":"2022-11-07 15:39"};
				const file = "/home/jet/website/src/content/team/janette-lynch.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
