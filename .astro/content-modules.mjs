
export default new Map([
["src/blog/post1.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog%2Fpost1.mdx&astroContentModuleFlag=true")],
["src/blog/post2.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog%2Fpost2.mdx&astroContentModuleFlag=true")],
["src/blog-en/post2.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog-en%2Fpost2.mdx&astroContentModuleFlag=true")],
["src/blog-en/post1.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fblog-en%2Fpost1.mdx&astroContentModuleFlag=true")]]);
		