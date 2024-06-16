import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_618a73d7.mjs';
import 'clsx';

const html = "<p>Want to learn how to build your own self driving car? Check out my detailed tutorial from creating the mechanical components, to electrical assembly to the software interface with cutting edge sensors. You can make your own Self Driving car in just thousands of dollars instead of the $12B invested to make an autonomous car :)</p>\n<h2 id=\"check-out-the-website\">Check out the website</h2>\n<p><a href=\"https://go-kart-upenn.readthedocs.io/en/latest/index.html#\">https://go-kart-upenn.readthedocs.io/en/latest/index.html#</a></p>";

				const frontmatter = {"draft":false,"title":"Make your own self driving car","snippet":"Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti.","image":{"src":"https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240","alt":"data structures & algorithms"},"publishDate":"2022-11-09 16:39","category":"Tutorials","author":"Tejas Agarwal","tags":["webdev","tailwindcss","frontend"]};
				const file = "/home/jet/website/src/content/blog/essential-data-structures-algorithms.md";
				const url = undefined;
				function rawContent() {
					return "\nWant to learn how to build your own self driving car? Check out my detailed tutorial from creating the mechanical components, to electrical assembly to the software interface with cutting edge sensors. You can make your own Self Driving car in just thousands of dollars instead of the $12B invested to make an autonomous car :)\n\n## Check out the website\n\nhttps://go-kart-upenn.readthedocs.io/en/latest/index.html#\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"check-out-the-website","text":"Check out the website"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
