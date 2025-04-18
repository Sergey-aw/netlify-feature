import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    // Reference a single author from the `authors` collection by `id`
    author: reference('authors'),
    // Reference an array of related posts from the `blog` collection by `slug`
    relatedPosts: z.array(reference('blog')),
  })
});

// English version of blog posts
const blog_en = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './src/blog-en' }),
  schema: z.object({
    title: z.string(),
    // Reference a single author from the `authors` collection by `id`
    author: reference('authors'),
    // Reference an array of related posts from the English collection by `slug`
    relatedPosts: z.array(reference('blog_en')),
  }),
});


// Export both default and English blog collections
export const collections = {
  blog,
  // English translations for blog posts
  blog_en,
};