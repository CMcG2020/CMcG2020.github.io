import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');

  return rss({
    title: 'Claire McGonigal - Blog',
    description: 'Thoughts on data engineering, technology, and more.',
    site: context.site?.toString() || 'https://CMcG2020.github.io/claire-portfolio',
    items: blog
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.excerpt,
        link: `/claire-portfolio/blog/${post.slug}/`,
      })),
    customData: `<language>en-gb</language>`,
  });
}
