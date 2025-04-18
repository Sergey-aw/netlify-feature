
export default new Map([
["src/blog/test.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog%2Ftest.mdx&astroContentModuleFlag=true")],
["src/blog/mdx-example.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog%2Fmdx-example.mdx&astroContentModuleFlag=true")],
["src/blog/post2.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog%2Fpost2.mdx&astroContentModuleFlag=true")],
["src/blog-en/post2.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog-en%2Fpost2.mdx&astroContentModuleFlag=true")],
["src/blog-en/test.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog-en%2Ftest.mdx&astroContentModuleFlag=true")]]);
		